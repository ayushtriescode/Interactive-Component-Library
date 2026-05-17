# Custom Interactive Component Library

A modular, highly reusable UI component library built from scratch using **React.js** and **Tailwind CSS**. This repository serves as a personal "Design System" and production-ready toolbox, focusing heavily on mastering React component composition, design patterns, and flexible content injection using `props.children`.

This is Project #6 in my Frontend Mastery track, built specifically to practice structural breadth and vertical depth in UI development.

---

## 🛠️ Key Architectural Concepts Covered
*   **Compound & Containment Design:** Leveraging `{children}` to build "content-blind" structural frames that accept any valid JSX element.
*   **Opaque Data Handling:** Using the `React.Children` top-level utility API (`Children.toArray`) to reliably manage and transform unpredictable children props.
*   **State Synchronization:** Creating decoupled internal state management for components like Accordions, and synchronized index-based states for Tabs.

---

## 💎 Features & Components Built

### 1. The Backdrop Modal
*   **Overlay Portal:** Uses a full-screen fixed backdrop layer with real-time blur (`backdrop-blur-sm`).
*   **State Controlled:** Toggles visibility conditionally from the parent level (`isOpen`), preventing unnecessary DOM footprints.

### 2. Smooth Accordion
*   **Self-Contained Logic:** Manages its own expansion state independently via internal `useState`.
*   **Dynamic Styling:** Incorporates state-driven Tailwind transformations (e.g., arrow rotation based on visibility).

### 3. Synchronized Tabs
*   **Index Filtering:** Maps a configurations array to generate navigation headers dynamically.
*   **Safe Arrays:** Safe extraction of child components using `React.Children.toArray(children)[activeTab]` to prevent edge-case application crashes.

---

## 🎨 Visual Identity
*   **Theme:** Premium, high-contrast dark mode aesthetic.
*   **Color Palette:** Dominated by rich neutral grays, slate blacks, and vibrant emerald accents—purposefully omitting generic blues to achieve a sleek, modern UI.
*   **Effects:** Glassmorphism treatments, subtle borders, and precise transitions.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/ayushtriescode/Interactive-Component-Library.git](https://github.com/ayushtriescode/Interactive-Component-Library.git)