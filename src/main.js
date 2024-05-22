// import { findPhotoByRequst } from './js/pixabay-api.js';
import { createGalleryItemMarcup } from './js/render-functions.js';
import { getPictures, PER_PAGE } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.load-more-js');

searchFormEl.reset();

let searchReqest = '';
let picPage = 1;
let totalPages = 0;

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

const onSearchFormSubmit = async event => {
  event.preventDefault();
  searchReqest = event.target.elements.searchQuery.value.trim();
  galleryEl.innerHTML = '';
  loadMoreBtnEl.classList.add('is-hidden');

  if (!searchReqest) {
    return iziToast.info({
      message: 'The search field must not be empty',
      position: 'topCenter',
      timeout: 2500,
    });
  }

  picPage = 1;

  try {
    loaderEl.classList.remove('is-hidden');

    const { hits, totalHits } = await getPictures(searchReqest, picPage);
    if (totalHits === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      searchFormEl.reset();
      loaderEl.classList.add('is-hidden');
      return;
    }
    galleryEl.insertAdjacentHTML('beforeend', createGalleryItemMarcup(hits));
    lightbox.refresh();
    loaderEl.classList.add('is-hidden');
    totalPages = Math.ceil(totalHits / PER_PAGE);
    if (totalPages > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');
    }
  } catch (error) {
    loaderEl.classList.add('is-hidden');
    searchFormEl.reset();
  }
  searchFormEl.reset();
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const smoothScrollOnLoadMore = () => {
  const lastPhoto = document.querySelector('.card:last-child');
  const photosHeight = lastPhoto.getBoundingClientRect().height;
  const twoPhotosHeight = photosHeight * 2;
  window.scrollBy({
    top: twoPhotosHeight,
    left: 0,
    behavior: 'smooth',
  });
};

const onLoadPress = async event => {
  try {
    loaderEl.classList.remove('is-hidden');
    picPage += 1;
    const { hits, totalHits } = await getPictures(searchReqest, picPage);
    galleryEl.insertAdjacentHTML('beforeend', createGalleryItemMarcup(hits));
    lightbox.refresh();
    smoothScrollOnLoadMore();
    loaderEl.classList.add('is-hidden');
    totalPages = Math.ceil(totalHits / PER_PAGE);
    if (picPage < totalPages) {
      loadMoreBtnEl.classList.remove('is-hidden');
    } else {
      loadMoreBtnEl.classList.add('is-hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      loadMoreBtnEl.removeEventListener('click', onLoadPress);
      return;
    }
  } catch (error) {
    loaderEl.classList.add('is-hidden');
    searchFormEl.reset();
    return;
  }
};

loadMoreBtnEl.addEventListener('click', onLoadPress);
