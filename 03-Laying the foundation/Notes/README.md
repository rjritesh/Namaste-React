# ⚛️ Introducing JSX – Writing Clean & Readable React Code (Namaste React Notes)

This guide helps you understand why JSX is important in React, how it's different from HTML, and how tools like **Babel** and **Parcel** make it work under the hood.

---

## 💡 Why Not Use `React.createElement()`?

- Writing UI with `React.createElement()` is hard to read, not developer-friendly, and not scalable.
- JSX solves this problem by making our code cleaner, easier to write, and human-readable.

📢 NOTE:  
We write code first for humans (developers) and then for machines.

---

## 🧾 What is JSX?

- JSX stands for JavaScript XML.
- It’s a syntax extension for JavaScript that looks similar to HTML or XML.
- JSX is not HTML, and it is not a part of React.
- React can work without JSX, but the code becomes very messy and hard to manage.

---

### 🚫 Why Can't Browsers Understand JSX?

- JSX is not valid JavaScript.
- Browsers cannot understand JSX directly because it is not part of the ECMAScript standard.
- It needs to be transpiled before execution.

---

## 🔄 How Does JSX Work Then?

- Parcel (our bundler) takes care of converting JSX into something browsers can understand.
- Parcel uses a tool called Babel to perform this task.

📦 Babel is the transpiler/compiler responsible for converting JSX into vanilla JavaScript.

🌐 Learn more: babeljs.io

---

## 🧾 JSX Syntax Style

- For single-line JSX: You can write tags directly.
- For multi-line JSX: Always wrap JSX inside parentheses `()` to tell Babel where it starts and ends.

📢 NOTE:
Use `()` when writing multi-line JSX to avoid syntax errors.

---

## 🧰 Recommended VS Code Extensions

1. Prettier – Code formatter  
2. ESLint – Code linting for quality  
3. Better Comments – Colorful, organized comments  

---

# 🧩 Introducing React Components

## 🤔 What is a Component?

A component is the building block of any React app. Everything in React is a component.

---

### 📂 Types of Components:

1. Class-based – Older style, rarely used now  
2. Functional – Modern, preferred, and widely used  

---

## 🔧 What is a Functional Component?

- Just a JavaScript function that returns JSX or a React Element.
- Must start with a capital letter to distinguish it from normal HTML or functions.

---

## 🧬 Rendering Functional Components

- You can render a functional component using JSX syntax like a normal HTML tag.
```js
<Heading />
```
- Other valid ways include self-closing tags or calling the function inside curly braces.
```js
<Heading></Heading>
{Heading()}

---

## 🧱 Component Composition

- Component Composition means placing one component inside another.
- The code of the inner component becomes part of the outer component.
- It helps in organizing and reusing UI code.

```js
const Title = () => <h1>Namaste React</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
  </div>
);
```
---

# 🧠 Using JavaScript Inside JSX

## ✅ Injecting JS Values in JSX:

- You can inject JavaScript variables using `{}` inside JSX.

## ✅ Injecting React Elements:

- React elements (like spans, divs, etc.) can also be embedded inside JSX using `{}`.

---

## ⚠️ Can We Nest the Same Component?

No. Calling a component inside itself causes:

- Infinite loop  
- Stack overflow  
- Browser freeze  

🚫 Avoid recursive component calls.

---

# ✅ Advantages of Using JSX

1. **Sanitizes Data**  
   JSX escapes any malicious code from APIs to prevent cross-site scripting (XSS) attacks.  
   It keeps your app and users safe.

2. **Improves Readability**  
   JSX makes your React code much more clean, beautiful, and easy to debug.

---
