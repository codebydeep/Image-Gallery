const images = [
  "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg",
  "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg",
  "https://images.unsplash.com/photo-1755398104024-fafdf0acb0f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1669239225693-9f54367254d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg",
];

const imageContainer = document.getElementById("image-container");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

images.forEach((url, index) => {
  const img = document.createElement("img");
  img.src = url;
  img.className =
  "w-60 h-50 object-cover rounded-sm cursor-pointer shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl";
  img.addEventListener("click", () => openLightbox(index));
  imageContainer.appendChild(img);
});

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex];
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});