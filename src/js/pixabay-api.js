import axios from 'axios';

const API_KEY = '43847470-26a4b647964be33653231b3f4';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export async function getPictures(q, picPage = 1) {
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
  const imagesData = response.data;
  return imagesData;
}
