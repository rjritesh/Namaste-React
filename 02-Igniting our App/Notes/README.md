# 🚀 Igniting Our App – Getting Production Ready (Namaste React Notes)

This guide walks you through how to make a React app production-ready using modern tools like Parcel, npm, and other useful features.

---

## 🔥 To Make Our App Production Ready, We Must:

- **Minify** the code (remove console logs, unnecessary comments, whitespace)
- **Optimize** the performance
- **Bundle** everything together (HTML, CSS, JS)
- **Serve it through a server**

📌 NOTE:  
**Minify → Optimization → Clean Console → Bundle**

---

## 📦 What is a Bundler?

A **bundler** packages all your app files into optimized production code so that it’s easy to run in browsers.

### 🔹 Examples of Bundlers:
- Webpack  
- Parcel  
- Vite  

📌 NOTE: In `create-react-app`, the default bundler is **Webpack**.

---

## 📁 What is a Package Manager?

- A **package manager** helps you install, manage, and update packages (like Parcel).
- Common ones: **npm** (Node Package Manager), **yarn**

---

## 🌳 What is Tree Shaking?
- Tree shaking = Removing unused/dead code from the final bundle
- Helps reduce bundle size and make app load faster

---

## What is Hot Module Replacement(HMR)?
- It is a feature that updates only the changed part of our code in the browser, without reloading the whole page.
- It makes our app faster and smoother

---

## 🌐 What is Browserslist?
- A config tool used in frontend projects to define which browsers should be supported.
- Ensures cross-browser compatibility.
- Can be added inside package.json like this:

```json
"browserslist": [
  "> 0.2%",
  "not dead",
  "not op_mini all"
]
