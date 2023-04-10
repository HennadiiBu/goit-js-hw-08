// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

(function () {
  const markup = galleryItems.map(
    image =>
      `<li class="gallery__item">
    <a class="gallery__link" href=${image.original}>
        <img class="gallery__image" src=${image.preview} alt=${image.description} />
    </a>
</li>`
  );
  gallery.insertAdjacentHTML('beforeend', markup.join(''));
})();

new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
