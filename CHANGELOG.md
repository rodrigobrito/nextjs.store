# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New items to the checklist of the `pull_request_template.md` ([#4](https://github.com/vtex-sites/nextjs.store/pull/4))
- Integrates with search.query event api (#2)
- Applies new local tokens to `Badge` (#462)
- Applies new local tokens to `Hero` (#435)
- Applies new local tokens to `Quantity Selector` (#448)

### Changed
- Migrates to Next.JS (#475)
- Applies new local tokens to `ProductShelf` component (#464)
- Adds Storybook configs (#463)
- Adds vtex search tracking script. With this we will populate TopSearches and Autocomplete indices (#389)
- Add `RegionalizationBar`, `RegionalizationButton` components and integrates it on Mobile and Desktop devices (#424).

### Changed

- Applies new local tokens to `BannerText` (#470)
- Update the Incentives component to handle CMS data (#474)

### Deprecated

### Removed

- The GitHub Action that was running Lighthouse, as it was frequently failing and WebOps already runs it (#484).
- Removes CSS imports of components that are not being used (#476)

### Fixed

- Fix Storybook initialization (#492)
- Fix styling issue on Regionalization Modal by adding the missing imports in layout.scss (#488)
- Fix unused CSS problem by separating imports into different files for each page (#473)
- Potential layout shift on Hero section fixed (#472)
- Fix layout section spacings style (#469)

### Security

## [0.2.2] - 2022-04-07

### Added

- Add `InputText` component (#440)

### Changed

- Enable Stylelint for some files and apply the rules after the Theme structure (#430)
- Upgrades to React18 (#461)
- Uses new Automatic JSX runtime (#460)
- Migrates Gatsby config files to TypeScript (#373)
- Migrates to Gatsby v4 (#456)
- Reduces the padding of `Breadcrumb`component (#453)

### Fixed

- Fix `SlideOver` scroll background behavior (#420)
- `SearchInput` margin left on mobile (#457)
- Fixed BaseStore logo right margin on mobile devices (#455)
- Fix PLP scroll bug after applying filters for the mobile version (#454)

## [0.2.1] - 2022-04-04

### Added

- `RegionalizationModal` component (#426)
- Add preloadQuery function (#445)
- New file `styles/global/tokens.scss` containing all global design tokens. (#442)
- Send channel string as search facet (#428)
- Add the brand new BaseStore logo (#447)
- Add `Dropdown` component in `Breadcrumb` component (#436)

### Changed

- Replaces `onDismissTransition` callback by a Provider that handles opening/closing of modal/slide over's behavior (#426)
- # `OutOfStock` integrated with regionalization
- `OutOfStock` integrated with regionalization (#441)
- Move ProductShelf and ProductTiles to the client side (#431)
- Drop gatsby-plugin-image in favor of custom/simpler component (#401)
- Replace `stylelint-config-rational-order` with `stylelint-config-recess-order` (#415)
- Simplify filters component by using `useReducer` instead of multiple `useState` (#422)
- Applies new local tokens to `ProductCard`. (#425)
- `OutOfStock` style and success message. (#399)
- Apply new local tokens to `Button` (#442)
- Gather all `Button` variants in the folder (`ButtonBuy`, `ButtonLink`, `ButtonIcon`, `ButtonSignIn`) (#442)

### Fixed

- CSS Warnings (#434)
- Fix alert banner colors (#442)

## [0.2.0] - 2022-04-01

### Added

- Add hideUnavailableItems at store.config (#400)
- Sections component with `content-visibility: auto` (#368)
- Webpack Bundle analyzer (#357)
- `GatsbyLink` to `Link` ui component. (#329)
- `Skeleton` loading components. (#317)
- `SuggestionsTopSearch` component (#355)
- `PostalCodeInput` component and `usePostalCode` hook. (#322)
- `SuggestionProductCard` component. (#359)
- `EmptyState` component. (#367)
- `EmptyState` at the `ProductGallery` section. (#367)
- `IconSVG` component to load SVG Icons. (#378)
- `Suggestions` component. (#372)
- `SearchHistory` component. (#391)
- `Badge` interactive variation. (#396)
- New folder `styles/global` containing all global styles. (#407)
- Session mutation when the user enters a new postal code. (#392)

### Changed

- Move inline styles to external stylesheet to improve TBT (#408)
- Changed ProductGallery and EmptyGallery styles to make the search results page (#387)
- Moved all icons to use Icon component (#386)
- Moved common/IconsSVG to ui/Icons (#386)
- Moved EmptyState from common to ui folder (#386)
- Removed fit-in property from image component (#375)
- Sections are now self-contained (#371)
- Moves icons to `/static/icons` folder (#357)
- Replaces page type redirects, a.k.a. `/account`, `/login` to a corresponding file in `/pages` folder (#310)
- Replaces `let` declarations for `useRef` for better React compatibility (#319)
- Refactors cart sidebar (#325)
- `BreadcrumbWrapper` from components/ui folder to `Breadcrumb` at components/sections (#326)
- Replace relative stylesheets imports with absolute path (#349)
- Moves some `Filter` component logic to the API (#321)
- `Sort` and `Button Filter` (Mobile) `Skeleton's` loading criteria (#362)
- Keep the latest `Filter` component state (Mobile) (#362)
- Implements the expanded mode of `Searchbar` in mobile devices. (#369)
- Updates Lighthouse and Cypress URL with valid product links (#369)
- `Hero` image responsive sizes for mobile and desktop. (#363)
- `Badge` variants names (#381)
- `Tiles` and `Tile` to use semantic list elements. (#383)
- `postalCode` from storage to Session context. (#388)
- Updates all tokens naming and simplifies the global styles. (#407)
- Changes `theme.scss` file to `global/tokens.scss`. (#407)

### Deprecated

- useWindowDimensions hook (#328)

### Removed

- Frontend computation in favor of backend processing (#411)
- Removing hooks folder and migrating these hooks to sdk ou inline them on components (#377)
- gatsby-plugin-offline due to CLS on recurrent users (#348)
- useWindowDimensions hook (#340)
- Removes unused `<FacetedFilter/>` component (#345)
- Unnecessary map at hooks (#323)
- API style redirects from `/_v/private/graphql` since they have no effect (#310)
- Display box from `<ProductCard/>` component (#354)
- `useTotalCount` hook (#362)
- Phosphor-react library (#378)
- `main::store::postalCode` value from storage. (#388)

### Fixed

- Unnecessary app rerender after login feature (#418)
- Fix typos found across the codebase (#412)
- Fix border style for Product Card and its skeleton on mobile (#379)
- The divisor for the `Breadcrumb` component not rendering valid HTML. (#365)
- useBuyButton/useRemoveButton hooks with inconsistent typings/behaviors (#360)
- React tree re-rendering (#328)
- Footer rendering pipeline (#328)
- Scroll lock when transitioning pages on mobile via `SlideOver` component navigation (#344)
- Filter Button specificity on desktop (#346)
- Filter facets are not being selected on mobile (#380)
- `CartItem` image size and truncate long product's title (#405)
- Entrusting the definition of the cursor property to the browser (#419)

## [0.1.1] - 2022-02-07

### Added

- Feat: Style IconButton (#290)

### Changed

- Chore: tweaks search page (#293)
- Extract UISelect from Sort to its own component (#299)
- Feat: lazy loading and improvements (CLS) (#300)

### Fixed

- SonarQube warning (#297)
- General fixes on Beta component (#287)
- Fix/Adjust inappropriate rerenders (#304)

## [0.1.0] - 2022-02-01

Version released for the Closed Beta

### Added

- This changelog
