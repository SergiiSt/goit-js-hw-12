import { findPhotoByRequst } from './js/pixabay-api.js';
import { createGalleryItemMarcup } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

searchFormEl.reset();

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchReqest = event.target.elements.searchQuery.value.trim();
  galleryEl.innerHTML = '';

    if (!searchReqest) {
      return iziToast.info({
        message: 'The search field must not be empty',
        position: 'topCenter',
        timeout: 2500,
      });
    }

  loaderEl.classList.remove('is-hidden');

  findPhotoByRequst(searchReqest)
  .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });
      }

      galleryEl.innerHTML = createGalleryItemMarcup(imagesData.hits);
      new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: '250',
      });
    })
    .catch(error => console.log(error))
    .finally(() =>  {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
