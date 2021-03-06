import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const createdGallery = makeGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", createdGallery);


function makeGallery(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
             <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
            </a>
        </div> `}).join(" ");
   
}



gallery.addEventListener('click', onImgClick);
const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
  onShow: (instance) => {
    window.addEventListener('keydown', onEscKeyClick);
  },

  onClose: (instance) => {
    window.removeEventListener('keydown', onEscKeyClick);
  },
});

/*
 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	// onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	// onClose: (instance) => {}

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;

  instance.show();
}

// .element()
// Returns the DOM element/node associated with the instance.

// Example:

// const elem = instance.element()

function onEscKeyClick(evt) {
  if (evt.key === 'Escape') {
    instance.close();
    return;
  }
}