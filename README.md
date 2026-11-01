# Aida Aryafar Academic Website

This repository contains the source for Aida Aryafar's academic personal website.

Live site:

https://aidaariafar.github.io/

## Structure

- `index.html` contains the static homepage.
- `assets/css/style.css` contains site styles.
- `assets/js/main.js` contains minimal progressive enhancement.
- `images/profile/` is where the profile image should go. The expected future path is `images/profile/profile.webp`.
- `images/projects/` is for selected research project images.
- `images/gallery/` is for personal or gallery images.
- `photos.html` contains the photography page and loads future images from `images/gallery/`.

## Preview Locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This is a plain static GitHub Pages site. The `.nojekyll` file tells GitHub Pages not to run Jekyll. Deployment is handled by GitHub Pages from the repository's configured publishing branch.
