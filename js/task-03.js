const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// get the gallery element from the DOM
const galleryEl = document.querySelector(".gallery");

// create a string of HTML for the images
const galleryHTML = images.map(
  (image) =>
    `<li><img src="${image.url}" alt="${image.alt}"/></li>`
).join("");

// add the gallery HTML to the DOM
galleryEl.insertAdjacentHTML("beforeend", galleryHTML);

galleryEl(images);
