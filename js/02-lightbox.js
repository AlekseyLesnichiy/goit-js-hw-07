import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const createdGallery = makeGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", createdGallery);

function makeGallery(obj) {
    return obj.map(({ preview, original, description }) => {
        return `
       <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}"
                alt="${description}"
                title ="${description}" />
        </a>`
  
    }).join(" ");
}
gallery.addEventListener("click", onClick);
let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});
// const img = document.querySelector("img");
// console.log(img.getAttribute("alt"));
function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
   
}