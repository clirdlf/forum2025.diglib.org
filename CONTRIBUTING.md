# Contributing to forum2025.diglib.org

Thank you for your interest in contributing! We welcome improvements to code, documentation, and content.

## Getting Started

1. Fork the repository and clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/forum2025.diglib.org.git
   cd forum2025.diglib.org
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm start
   ```

## Guidelines

- **Branching**: Create feature branches from `dev`:
  `git checkout -b feature/description dev`
- **Commits**: Use clear, descriptive messages. For example:
  `feat(cli): add support for filtering drafts`
- **Formatting**: Run `pnpm format` and ensure `pnpm lint` passes before committing.
- **Testing**: Add or update tests as needed and run `pnpm test`.

## Pull Requests

1. Push your branch to GitHub.
2. Open a Pull Request against `dev` with a clear description of changes.
3. Ensure CI checks (lint, tests, build) pass before requesting review.

## Reporting Issues

Please use the [issue tracker](https://github.com/clirdlf/forum2025.diglib.org/issues) to report bugs or request features.