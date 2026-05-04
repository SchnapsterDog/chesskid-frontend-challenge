<br />
<div>
  <h1>♟️ Chess.com Frontend Challenge</h1>
  <p>Vue 3 + SCSS implementation of the Chess.com / ChessKid frontend programming task.</p>
   <p>
    🔗 <a href="https://chesskid.netlify.app/" target="_blank"><b>Live Demo</b></a>
  </p>
</div>

---

## 📌 About the Project

This project is a responsive chessboard application built with **Vue 3** and **SCSS**, following the requirements defined in the Chess.com frontend challenge.

The goal was not only to meet the requirements, but to deliver a **clean, production-ready frontend implementation** with proper structure, responsiveness, and test coverage.

---

## ✅ Features

- ♟️ Fully responsive **8x8 chessboard**
- 📱 Mobile-first layout (sidebar moves below board)
- 🖥️ Desktop layout (sidebar positioned right)
- 🎯 Square highlighting with multiple selection support
- 📝 Click log sidebar with preserved history
- 🔁 Toggle behavior:
  - Click → highlight + log
  - Click again → unhighlight (no log change)
  - Click again → new log entry
- 📏 Board always visible with **minimum 264x264**
- 🧪 Unit tests using **Vitest + Testing Library**

---

## 🧱 Tech Stack

- Vue 3 (Composition API)
- Vite
- SCSS (BEM methodology)
- CSS Flexbox + Grid layout
- Vitest
- @testing-library/vue

---

## ⚙️ Tested Node Versions

The project was tested and verified with:

v20.19.5  
v22.18.0  

---

## 🚀 Getting Started

### Install dependencies

npm install

### Run development server

npm run dev

### Run tests

npm run test:run

### Build for production

npm run build

---

## 🧪 Testing

The project includes unit tests covering:

- Board rendering (64 squares)
- Highlight behavior
- Log ordering
- Toggle behavior (highlight / unhighlight / re-log)

---

## 🧠 Implementation Notes

- Chessboard is generated dynamically using **file/rank arrays**
- Highlight state is stored separately from the log to match requirements
- Layout uses **Flexbox + CSS Grid** to guarantee responsiveness
- SCSS is structured using **BEM methodology** for maintainability and clarity
- Accessibility considered via:
  - role="grid" and gridcell
  - aria-pressed for interaction state

---

## 💡 Approach

The implementation focuses on:

- clarity over over-engineering
- predictable state management
- clean component structure
- strong UX consistency across devices

---

## 👤 Author

Oliver Trajcheski  
Senior Frontend Engineer  
Vue / Nuxt / Product-focused development
oliver@akrinum.com