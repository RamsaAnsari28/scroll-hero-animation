# Scroll-Driven Hero Section Animation

A premium scroll-driven hero section built using **Next.js, GSAP, ScrollTrigger, Tailwind CSS, and Lenis**.

This project recreates a smooth, scroll-based animation experience inspired by the provided reference while focusing on motion quality, performance, and clean UI behavior.

---

## 🚀 Live Demo

🔗 Live Website: https://scroll-hero-animation-lemon.vercel.app/
🔗 GitHub Repository: https://github.com/RamsaAnsari28/scroll-hero-animation

---

## 📌 Assignment Objective

The goal of this project was to:

* Implement a full-screen hero section
* Create smooth initial load animations
* Build scroll-driven motion tied to scroll progress (not time-based)
* Ensure animations are smooth, performant, and premium
* Use modern frontend technologies

---

## ✨ Features Implemented

### 1️⃣ Hero Section Layout

* Full viewport hero section (above the fold)
* Letter-spaced headline
* Impact statistics displayed below headline
* Modern gradient background with depth effects

### 2️⃣ Initial Load Animations

* Staggered letter reveal animation for headline
* Sequential stats animation with delay
* Smooth easing using GSAP

### 3️⃣ Scroll-Based Animations (Core Feature)

* Main visual element moves based on scroll position
* Animation tied to scroll progress using `ScrollTrigger`
* Orb parallax effect
* Headline fades on scroll
* Stats fade out smoothly
* Subtle hero depth scaling
* Buttery smooth scrolling using Lenis

### 4️⃣ Performance Considerations

* Animations use `transform` properties (`x`, `y`, `scale`, `rotation`)
* No heavy scroll event listeners
* GSAP context used for proper cleanup
* Optimized smooth scroll integration

---

## 🛠 Tech Stack

* Next.js (React)
* Tailwind CSS
* GSAP
* GSAP ScrollTrigger
* Lenis (Smooth Scroll)
* JavaScript (ES6)

---

## 📂 Project Structure

```
src/
 ├── app/
 │    ├── layout.js
 │    └── page.js
 ├── components/
 │    ├── Hero.jsx
 │    └── SmoothScroll.jsx
```

---

## 🎯 Key Concepts Demonstrated

* Scroll-based animation control
* Motion design principles
* Staggered animations
* Performance-optimized transforms
* Responsive typography
* Clean component structure

---

## ⚙️ Installation (If Running Locally)

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

---

## 📦 Deployment

This project is deployed using **Vercel** for optimal performance and seamless Next.js integration.

---

## 💡 Notes

This project focuses on creating smooth, premium-feeling animations while maintaining performance and clean code structure. The scroll interactions are tied directly to user scroll progress to ensure natural motion behavior.

---

## 👤 Author

Ramsa Ansari
Frontend Developer

---

## 📜 License

This project is created for educational and assignment purposes.
