# [1.4.0](https://github.com/bechandrakant/finance-formulas/compare/v1.3.1...v1.4.0) (2026-04-19)


### Bug Fixes

* add npm token for CI publish ([b87a68b](https://github.com/bechandrakant/finance-formulas/commit/b87a68bb1debea0c1cfad16ddb7dbfcd69fed8b0))
* add write permissions for GitHub Actions docs deployment ([cfd8288](https://github.com/bechandrakant/finance-formulas/commit/cfd8288174b96cdf58402607b3aaa37aa83e3d20)), closes [#pages](https://github.com/bechandrakant/finance-formulas/issues/pages)
* complete GitHub Actions release workflow ([48d1165](https://github.com/bechandrakant/finance-formulas/commit/48d1165f311a26832a827aa1dfea7c25f03a2319))
* trigger release after permissions fix ([4c3d40f](https://github.com/bechandrakant/finance-formulas/commit/4c3d40fcc13878e5dbfc9e9b1bb3bbfb267ce6b9))
* update Node.js version for semantic-release compatibility ([5abcf31](https://github.com/bechandrakant/finance-formulas/commit/5abcf31e90ac4a4c69b780a881dcfeb4afac14ca))


### Features

* add totalInterest calculator function ([795b471](https://github.com/bechandrakant/finance-formulas/commit/795b47122facf0f63e496957dd466d839b7754e0))
* add tree-shaking support with granular exports ([80abd2c](https://github.com/bechandrakant/finance-formulas/commit/80abd2c3f073e4d7757702cb64a58bf9ed70f506))
* initial release with SIP EMI FD CAGR ([d97143b](https://github.com/bechandrakant/finance-formulas/commit/d97143b5bf504729ec3aab88fc13a89ea4c73790))

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
