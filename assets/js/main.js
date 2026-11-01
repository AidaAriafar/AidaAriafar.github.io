const optionalImageContainers = document.querySelectorAll("[data-optional-image]");

optionalImageContainers.forEach((container) => {
  const src = container.dataset.optionalImage;
  const alt = container.dataset.imageAlt || "";
  const probe = new Image();

  probe.onload = () => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    container.replaceChildren(image);
    container.classList.add("has-image");
    container.removeAttribute("aria-hidden");
  };

  probe.src = src;
});

const photoGallery = document.querySelector("[data-photo-gallery]");
const emptyGallery = document.querySelector("[data-empty-gallery]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
let lastFocusedElement = null;

const photoPaths = Array.from({ length: 7 }, (_, index) => {
  return `images/gallery/${String(index + 1).padStart(2, "0")}.webp`;
});

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lastFocusedElement?.focus();
};

const openLightbox = (src, alt, trigger) => {
  if (!lightbox || !lightboxImage) return;
  lastFocusedElement = trigger;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.hidden = false;
  lightboxClose?.focus();
};

if (photoGallery) {
  photoPaths.forEach((src, index) => {
    const probe = new Image();
    const alt = `Photo ${index + 1} by Aida Aryafar`;

    probe.onload = () => {
      const figure = document.createElement("figure");
      const button = document.createElement("button");
      const image = document.createElement("img");

      image.src = src;
      image.alt = alt;
      button.type = "button";
      button.setAttribute("aria-label", `Open photo ${index + 1}`);
      button.append(image);
      button.addEventListener("click", () => openLightbox(src, alt, button));
      figure.append(button);
      photoGallery.append(figure);
      emptyGallery?.classList.add("is-hidden");
    };

    probe.src = src;
  });
}

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
