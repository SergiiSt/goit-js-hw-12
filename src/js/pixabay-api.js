const API_KEY = '43847470-26a4b647964be33653231b3f4';
const BASE_URL = 'https://pixabay.com/api/';

export const findPhotoByRequst = q => {
  const serchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'all',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${serchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};
