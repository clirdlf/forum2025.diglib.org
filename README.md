# forum2025.diglib.org 🌬️

A static site for the DLF Forum 2025 in Denver, built with [Eleventy](https://www.11ty.dev/) and
[Tailwind CSS](https://tailwindcss.com/).

## Table of Contents

- [forum2025.diglib.org 🌬️](#forum2025digliborg-️)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
  - [Linting \& Formatting](#linting--formatting)
  - [Testing](#testing)
  - [Building](#building)
  - [Deployment](#deployment)
  - [Asset Optimization](#asset-optimization)
  - [Contributing](#contributing)
  - [Changelog](#changelog)
  - [Image Credits](#image-credits)

## Prerequisites

- **Node.js** 20 or later (npm included)
- **pnpm** 8 or later (recommended)
- **ImageMagick** (`magick` CLI) for resizing hero images
- **cwebp** (WebP tools) for WebP conversion

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/clirdlf/forum2025.diglib.org.git
cd forum2025.diglib.org
pnpm install
```

## Available Scripts

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `pnpm start`        | Run dev server and watch CSS (http://localhost:8080) |
| `pnpm test`         | Execute unit tests (Jest)                            |
| `pnpm build`        | Build production site (HTML + CSS)                   |
| `pnpm lint`         | Run ESLint, Stylelint & HTML-Validate                |
| `pnpm format`       | Format codebase with Prettier                        |
| `pnpm format:check` | Check code formatting with Prettier                  |
| `pnpm clean`        | Remove generated site folder (`_site`)               |

## Linting & Formatting

```bash
pnpm lint
pnpm format:check
```

## Testing

```bash
pnpm test
```

## Building

```bash
pnpm build
```

Output in `_site`.

## Deployment

Continuous deployment via GitHub Actions: pushes to `main` or `dev` trigger
`.github/workflows/deploy.yml` to build & publish to GitHub Pages.

## Continuous Integration

This project uses GitHub Actions for CI to enforce linting, formatting, testing, and build checks on
every push and pull request. See [`.github/workflows/ci.yml`](.github/workflows/ci.yml) for details.

## Asset Optimization

| Script               | Description                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------- |
| `./resize_images.sh` | Resize images in `src/static` to a max of 2560×1400 via ImageMagick (`mogrify`).          |
| `./generate_webp.sh` | Convert `.jpg` files in `src/static` to `.webp` using `cwebp` (use `--all` to reprocess). |

Resize inline using Eleventy Image plugin:

```njk
<img eleventy:widths="200,600" src="/static/CLCS-46.jpg" alt="Learn@DLF" class="object-cover" />
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on filing
issues and submitting pull requests.

## Changelog

All notable changes are documented in [CHANGELOG.md](CHANGELOG.md).

## Image Credits

- Photo by
  <a href="https://unsplash.com/@acharki95?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aziz
  Acharki</a> on
  <a href="https://unsplash.com/photos/selective-focus-photography-of-white-and-orange-petaled-flower-tLsOA0Vlvwk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@apreble?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrew
  Preble</a> on
  <a href="https://unsplash.com/photos/low-angle-photography-of-union-station-zrhXd14ICRo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@skjev5280?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">JJ
  Shev</a> on
  <a href="https://unsplash.com/photos/union-station-travel-by-train-neon-signage-building-E7_ynWgi9lU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@nicosmit99?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nico
  Smit</a> on
  <a href="https://unsplash.com/photos/text-QnkzvFCxKrA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@darthxuan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Xuan
  Nguyen</a> on
  <a href="https://unsplash.com/photos/shallow-focus-photography-of-honey-bee-g6xmTnzy6Us?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@reganography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Samuel
  Regan-Asante</a> on
  <a href="https://unsplash.com/photos/a-neon-sign-that-says-watch-this-space-Rk8fHGGeyr8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@jbecks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan
  Beckman</a> on
  <a href="https://unsplash.com/photos/blue-and-yellow-wall-graffiti-pDQRQ7lJxZ4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@mhessling?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">MARK
  HESSLING</a> on
  <a href="https://unsplash.com/photos/people-gathering-in-front-of-theater-during-day-nJTM3aXrhFc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@loganbonjean?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Logan
  Bonjean</a> on
  <a href="https://unsplash.com/photos/yellow-and-black-street-lanterns-qgw61durdXo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@wavkind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcel</a>
  on
  <a href="https://unsplash.com/photos/human-hands-doing-heart-gesture-fx39Iesd13M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@giuliamay?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Giulia
  May</a> on
  <a href="https://unsplash.com/photos/info-arrow-signage-8JFMYz-a8Xo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@bostonpubliclibrary?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Boston
  Public Library</a> on
  <a href="https://unsplash.com/photos/cars-on-road-between-high-rise-buildings-during-daytime-y0OWfnOGnzo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@planner1963?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pieter
  van de Sande</a> on
  <a href="https://unsplash.com/photos/denver-street-artowrk-r6BdUpN_iSk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Photo by
  <a href="https://unsplash.com/@emilymorter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emily
  Morter</a> on
  <a href="https://unsplash.com/photos/question-mark-neon-signage-8xAA0f9yQnE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
