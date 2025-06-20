# forum2025.diglib.org 🌬️

This repository contains the source for the DLF Forum 2025 website. The site is built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Local development

### Prerequisites
- [Node.js](https://nodejs.org/) 20 or later (npm is included)
- [pnpm](https://pnpm.io/) 8 or later (recommended)

### Getting started
1. Clone this repository
   ```bash
   git clone https://github.com/clirdlf/forum2025.diglib.org.git
   cd forum2025.diglib.org
   ```
2. Install dependencies
   ```bash
   pnpm install
   ```
3. Start a development server
   ```bash
   pnpm start
   ```
   Your site is now available at [http://localhost:8080](http://localhost:8080).
4. (Optional) Run the unit tests
   ```bash
   pnpm test
   ```
5. Build the production version
   ```bash
   pnpm run build
   ```
   The generated files can be found in the `_site` directory.

## Linting

Lint the codebase (JavaScript, CSS, and HTML/Nunjucks templates):
```bash
pnpm lint
```

## Deployment workflow

Deployment is handled automatically through [GitHub Actions](https://github.com/features/actions). Pushing to the `main` or `dev` branch triggers `.github/workflows/deploy.yml` which installs dependencies, builds the site, and publishes `_site` to GitHub Pages.

For more information on GitHub Pages deployments, see the [official documentation](https://docs.github.com/en/pages).

## Resizing Images

<https://www.roberthorvick.com/blog/converting-images-from-png-jpg-to-webp-and-resizing>

    cwebp infile.png -o outfile.webp

Run resize script:

```bash
    ./resize_images.sh
```

Hero Images

```bash
cd src/static
magick convert src/static/boston-public-library-y0OWfnOGnzo-unsplash.jpg
```

Other images can be automagically resized on the page with:

    <img eleventy:widths="200,600" src="/static/CLCS-46.jpg" alt="Learn@DLF" class="h-full w-full rounded-xl lg:min-h-[450px] object-cover"/>

## Image Credits

- Photo by <a href="https://unsplash.com/@acharki95?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aziz Acharki</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-white-and-orange-petaled-flower-tLsOA0Vlvwk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@apreble?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrew Preble</a> on <a href="https://unsplash.com/photos/low-angle-photography-of-union-station-zrhXd14ICRo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@skjev5280?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">JJ Shev</a> on <a href="https://unsplash.com/photos/union-station-travel-by-train-neon-signage-building-E7_ynWgi9lU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@nicosmit99?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nico Smit</a> on <a href="https://unsplash.com/photos/text-QnkzvFCxKrA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@darthxuan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Xuan Nguyen</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-honey-bee-g6xmTnzy6Us?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@reganography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Samuel Regan-Asante</a> on <a href="https://unsplash.com/photos/a-neon-sign-that-says-watch-this-space-Rk8fHGGeyr8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@jbecks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan Beckman</a> on <a href="https://unsplash.com/photos/blue-and-yellow-wall-graffiti-pDQRQ7lJxZ4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@mhessling?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">MARK HESSLING</a> on <a href="https://unsplash.com/photos/people-gathering-in-front-of-theater-during-day-nJTM3aXrhFc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@loganbonjean?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Logan Bonjean</a> on <a href="https://unsplash.com/photos/yellow-and-black-street-lanterns-qgw61durdXo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@wavkind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcel</a> on <a href="https://unsplash.com/photos/human-hands-doing-heart-gesture-fx39Iesd13M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@giuliamay?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Giulia May</a> on <a href="https://unsplash.com/photos/info-arrow-signage-8JFMYz-a8Xo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@bostonpubliclibrary?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Boston Public Library</a> on <a href="https://unsplash.com/photos/cars-on-road-between-high-rise-buildings-during-daytime-y0OWfnOGnzo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@planner1963?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pieter van de Sande</a> on <a href="https://unsplash.com/photos/denver-street-artowrk-r6BdUpN_iSk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by <a href="https://unsplash.com/@emilymorter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emily Morter</a> on <a href="https://unsplash.com/photos/question-mark-neon-signage-8xAA0f9yQnE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>