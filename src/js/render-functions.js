export const createGalleryItemMarcup = images => {
  return images
    .map(
      image =>
        `<div class="card">
        <a href='${image.largeImageURL}'><img
        src='${image.webformatURL}'
        alt= '${image.tags}'
        width="360"
        height="152"
      /></a>
      <div>
      <ul class="card-list">
        <li>
          Likes
          <span>${image.likes}</span>
        </li>
        <li>
          Views
          <span>${image.views}</span>
        </li>
        <li>
          Comments
          <span>${image.comments}</span>
        </li>
        <li>
          Downloads
          <span>${image.downloads}</span>
        </li>
      </ul>
      </div>
    </div>`
    )
    .join(' ');
};
