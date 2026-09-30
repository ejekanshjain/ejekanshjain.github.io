# Ekansh Jain's Projects

Browse 22 projects with search, tag filters, and light and dark themes.
The site uses Astro, TypeScript, Tailwind CSS, and Bun.
Press `D` to switch themes when you are not typing or choosing a tag.

## Development

Run `bun install`, then `bun run dev` to preview the site locally.
Run `bun run check`, `bun run format:check`, and `bun run build` before publishing changes.
Run `bun run preview` to inspect the production build.

## Project Catalogue

Edit `src/data/projects.ts` to update project names, descriptions, tags, and links.
Arrange entries in the order you want visitors to see.
Keep private repository links out of the catalogue.

## Deployment

The GitHub Actions workflow builds and deploys pushes to `master`.
Choose **GitHub Actions** under **Settings > Pages > Build and Deployment > Source** in your repository.
The site publishes at https://ejekanshjain.github.io.
