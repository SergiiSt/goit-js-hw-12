import axios from 'axios';

const API_KEY = '43847470-26a4b647964be33653231b3f4';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;
let picPage = 1;

// export const findPhotoByRequst = q => {
//   const serchParams = new URLSearchParams({
//     key: API_KEY,
//     q,
//     image_type: 'all',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   return fetch(`${BASE_URL}?${serchParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// };

// Optionally the request above could also be done as

// Want to use async/await? Add the `async` keyword to your outer function/method.
export async function getPictures(q) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q,
        image_type: 'all',
        orientation: 'horizontal',
        safesearch: true,
        page: picPage,
        per_page: PER_PAGE,
      },
    });
const imagesData = response.data.hits;
    console.log(imagesData);
  } catch (error) {
    console.log(error);
  }
}
