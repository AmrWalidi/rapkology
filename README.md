# Rapkology

## Overview

**Rapkology** is a modern, responsive web application built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), designed to showcase rap music news, events, videos, and more. The project leverages Tailwind CSS for styling, Swiper.js for carousels, and FontAwesome for icons.

---

## Rationale

The goal of Rapkology is to create a visually engaging and user-friendly platform dedicated to rap music culture. The rationale behind the technical choices and design decisions includes:

- **Modern Stack:** Using Next.js and React ensures fast performance, scalability, and a great developer experience.
- **Utility-First Styling:** Tailwind CSS allows for rapid prototyping and consistent design, making it easy to maintain and extend the UI.
- **Dynamic Content:** Swiper.js and React state management provide interactive and dynamic user experiences, such as carousels and tag-based filtering.
- **Accessibility:** Semantic HTML and accessible components ensure the platform is usable by everyone.
- **Customization:** The structure allows for easy addition of new features, categories, and content, supporting the evolving needs of the rap community.
- **Brand Identity:** Custom fonts, icons, and unique shapes (using `clip-path`) help establish a strong and recognizable visual identity for Rapkology.

---

## Technical Stack

- **Framework:** Next.js (App Router, React 18)
- **Styling:** Tailwind CSS, custom CSS (globals.css)
- **Fonts:** Google Fonts via `next/font/google` (Saira, Saira Condensed)
- **Icons:** FontAwesome (solid, regular, brands)
- **Carousel:** Swiper.js
- **State Management:** React hooks (`useState`)
- **Data:** Static JSON files (e.g., `posts.json`)

---

## Folder Structure

```
/app
  /components
    album.tsx
    hero.tsx
    explore.tsx
    month_favorites.tsx
    post.tsx
    trends.tsx
  /data
    posts.json
  layout.tsx
  globals.css
```

---

## Key Components

### `layout.tsx`
- Root layout for the app.
- Loads Google Fonts and applies them via CSS variables.
- Responsive header with navigation, search, and mobile menu.

### `hero.tsx`
- Main hero section with Swiper carousel.
- Features dynamic slides, background images, and custom-shaped buttons using `clip-path`.
- Uses Tailwind’s utility classes for layout and effects.

### `explore.tsx`
- "Keşfet" (Explore) section for browsing posts by tag/category.
- Tag filtering with React state.
- Social media and newsletter signup UI.

### `post.tsx`
- Renders individual post cards using props from `posts.json`.

---

## Styling & Fonts

- **Tailwind CSS** is used for all utility-first styling.
- **Custom shapes** are achieved with `[clip-path:polygon(...)]` in className.
- **Google Fonts** are loaded using Next.js font optimization and applied via CSS variables and utility classes.
- **FontAwesome** icons are imported and used as React components.

---

## Interactivity

- **Filtering:** Posts are filtered by selected tag using React usestate.
- **Hover Effects:** Tailwind’s `group` and `group-hover` utilities are used for parent-child hover interactions.
- **Responsive Menus:** Mobile and desktop navigation is handled with conditional rendering and Tailwind breakpoints.

---

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## Accessibility & Best Practices

- Semantic HTML is used where possible.
- Buttons and links are accessible and keyboard-navigable.
- Responsive design ensures usability on all devices.