# Changelog

| Commit type               | Version bump |
| ------------------------- | ------------ |
| feat:                     | minor        |
| fix:                      | patch        |
| feat!: or BREAKING CHANGE | major        |
| docs:                     | no release   |
| chore:                    | no release   |

## [1.3.0] - 2026-04-18

### Added

- TypeScript support with full type definitions and JSDoc comments
- Modular code structure with separate calculator files in `src/calculators/`
- Comprehensive API documentation via TypeDoc
- GitHub Actions workflow for auto-deploying docs to GitHub Pages
- JSDoc comments for all functions with examples and parameter descriptions
- Interface types for `EMIResult` and `FDResult` return objects
- Enhanced package.json keywords for better npm discoverability
- MIT LICENSE file
- `publishConfig` setting for proper npm package access control
- `.gitignore` with comprehensive exclusions

### Changed

- Refactored source code into modular structure:
  - `src/calculators/sip.ts` - SIP calculations
  - `src/calculators/emi.ts` - EMI calculations
  - `src/calculators/fd.ts` - FD calculations
  - `src/calculators/cagr.ts` - CAGR calculations
- Updated build system to bundle from TypeScript source
- Improved code documentation and maintainability
- Enhanced test imports to use modular paths

### Previous Releases

feat: add SIP calculator
fix: rounding issue in EMI
docs: update README
feat!: change API signature
