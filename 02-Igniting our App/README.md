## EPISODE 2:

### 1. What is NPM?

- NPM is not Node Package Manager
- It is like a play-Store or app-store but for JS Developers
- It lets you download, install, and manage packages (ready-made code or libraries) created by other developers.

### 2. What is Bundlers?

- It is a tool that bundles our app, packages our app so that it can be shipped to production.
- It handles minification, Transpilation, Hot module replacement & tree shaking.
- All these process optimize and speed up development as well as production builds.
- Ex- Webpack, Parcel, Vite

### 3. Node modules

- It’s a **folder** where all the packages you install actually live.
- When you run `npm install`, npm **downloads the code** for each package here.
- Includes **packages you added** + **packages those packages need**.
- **Don’t touch it manually**; npm manages it.

### 4. Treeshaking

- It is a process used by bundlers to remove unused code
- It is used to make app smaller and faster.

### 5. HOT MODULE REPLACEMENT ( HMR )

- HMR is a feature of bundlers that updates only the changed part pf our code in browser without reloading the whole page.
- Faster & smoother development.

### 6. NPM vs NPX

- NPM is used to install a package permanently and run it.
- NPX is used to run a package without installing it.

### 7. BrowserList

- Browserlist is a configuration / settings that is used to tell - which browser will your app support.
- It is written in package.json

### 8. package.json vs package.lock.json

> “package.json lists the dependencies and version ranges of a project, like a wishlist.
> 
> 
> `package-lock.json` records the exact versions that were installed, ensuring the project is reproducible across all environments.”
>