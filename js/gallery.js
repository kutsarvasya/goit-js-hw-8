import { images } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItems(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems(images));

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const originalImageURL = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src=${originalImageURL} widht="1112" height="640">`
  );

  instance.show();

  document.body.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}
