const images = document.querySelectorAll(".lightboxable");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

lightbox.classList.remove("active");
lightboxImg.src = "";

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
  document.body.style.overflow = "";
});
