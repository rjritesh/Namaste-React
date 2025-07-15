# ⚛️ Introducing React – Beginner's Guide (Namaste React Notes)

This is a beginner-friendly guide to understanding the basics of **React**, along with important concepts like **Library vs Framework**, **CDN**, **CORS**, and more. Perfect for revision or your learning notes from *Namaste React*.

---

## 📌 What is React?

**React** is a **JavaScript library** used to build fast, dynamic, and interactive user interfaces, especially for **Single Page Applications (SPAs)**.

### 🤔 Why is it called “React”?

The name **React** was chosen because it helps developers **react to changes** in state and data, and updates the UI **declaratively and efficiently**.

---

## 📚 What is a Library?

- A **library** is a collection of **prewritten code** that developers can use and reuse for specific tasks.
- It makes development **faster** and reduces **errors**.
- Developers are in **full control** — they choose when and how to use the library.

**Examples**: React, jQuery, Lodash

---

## 🧱 What is a Framework?

- A **framework** provides a **ready-made structure** or foundation for building apps.
- The framework controls the flow and tells developers **where and how to write their code**.
- Developers have to **follow its rules and patterns**.

**Examples**: Angular, Django, Laravel

---

## 🔄 Difference between Library and Framework

- A **library** gives you freedom and control — you call its functions when needed.
- A **framework** is in control — it calls your code at specific places.
- A **library is flexible**, you decide the flow.
- A **framework enforces structure**, you follow its flow.
- Key concept: **Inversion of Control**
  - In a library: **You call the library**
  - In a framework: **The framework calls you**

---

## 🤝 Similarities between Library & Framework

- Both are created by third parties to make development easier.
- Both provide reusable code and solve common problems.
- Both help improve **performance** and **productivity**.

---

## ⚡ Emmet – Shortcut Tool for Web Developers

- **Emmet** allows writing shorthand code which auto-expands into full HTML or CSS.
- Speeds up writing repetitive code.
- Supported in VS Code and other code editors.
## 🌍 What is CDN (Content Delivery Network)?

CDN stands for **Content Delivery Network**.

Think of it like an **Amazon warehouse system**. Just like Amazon stores products in warehouses across different cities to deliver them faster, a **CDN stores website content in servers across the world** to serve users quickly.

### ✅ My Understanding:
> "CDN is like a warehouse of Amazon. It's a group of servers spread all over the world. These servers store copies of images, icons, videos, etc., and deliver them to users from the nearest server. It is used to make websites faster and reduces load on the main server."

### ✅ Why is CDN Important?

- 🚀 **Faster loading** – content is delivered from the nearest server.
- 📦 **Reduced load** on the main/origin server.
- 🌍 **Better global performance** – useful for international users.
- 📈 **Handles high traffic** easily by load balancing.
- 🔐 **Improves security** by protecting from DDoS attacks.

### 🧪 Real-Life Examples:

- YouTube & Netflix → Fast video streaming via CDN
- Amazon & Instagram → Quick image and asset loading
- React, Bootstrap → Can be included via CDN links (no need to download manually)

---

## 🔐 What is CORS (Cross-Origin Resource Sharing)?

**CORS** is a **security feature in browsers** that controls how resources are shared across **different domains**.

If your website is loading data or JavaScript from another server, **CORS ensures it’s safe and allowed**.

### ✅ Why CORS is Needed:

- Stops websites from making **unauthorized data requests** to other servers.
- Makes sure **only trusted sources** can access or share data with your app.
- Without CORS, modern browsers will **block the request** for safety.

