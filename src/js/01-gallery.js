// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const items = galleryItems.map(({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>`;
});

gallery.insertAdjacentHTML('beforeend', items.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
