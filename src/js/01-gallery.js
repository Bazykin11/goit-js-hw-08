// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', createGallery);

function createGallery (items){
    return items.map((item) =>
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`).join('');
}

const createGalleryMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup);

// gallery.innerHTML = createGalleryMarkup;

new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
 });