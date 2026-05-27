# Dev Portfolio

A responsive personal developer portfolio built with semantic HTML5 and CSS Grid — no frameworks, no build tools, no dependencies.

## Features

- Sticky frosted-glass navigation with active section highlighting
- Smooth scroll to sections
- Scroll-reveal animations (fade in on scroll)
- CSS Grid project showcase
- Mobile-responsive with hamburger menu
- Dark theme with CSS custom properties

## File Structure

```
profiolo/
├── index.html
├── css/
│   ├── reset.css        — base normalize
│   ├── variables.css    — colors, spacing, fonts (edit here to retheme)
│   ├── layout.css       — container, shared buttons, footer, reveal animation
│   ├── nav.css          — sticky nav + hamburger
│   ├── hero.css         — landing section
│   ├── about.css        — two-column about + skills grid
│   ├── projects.css     — project card grid
│   ├── contact.css      — contact block + social links
│   └── responsive.css   — tablet + mobile breakpoints
└── js/
    ├── projects.js      — project data + card renderer
    ├── nav.js           — scroll behavior, active link, hamburger toggle
    ├── smooth-scroll.js — offset-aware smooth anchor scrolling
    └── scroll-reveal.js — IntersectionObserver fade-in
```

## How to Run

Open `index.html` in any browser — no server or install required.

## Customization

**Your info** — edit `index.html` directly:
- Replace `Your Name` (appears in the hero, footer, and page title)
- Replace `[City]` in the about section
- Replace `hello@example.com` with your actual email
- Update the GitHub / LinkedIn / Twitter links in the contact section
- Swap `resume.pdf` for your actual resume file (place it next to `index.html`)

**Projects** — edit the `PROJECTS` array at the top of `js/projects.js`:
```js
{
  icon: '🚀',        // any emoji
  title: 'My App',
  description: 'What it does.',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/you/repo',
  live: 'https://myapp.com',  // set to null if no live link
}
```

**Colors / fonts** — all design tokens live in `css/variables.css`. Change `--color-accent` to repaint the entire accent color across every section.

**Photo** — replace the emoji avatar in `index.html` with a real image:
```html
<!-- Find this in index.html and swap it out -->
<div class="about__avatar">&#128100;</div>

<!-- Replace with: -->
<img class="about__avatar" src="photo.jpg" alt="Your Name">
```
Then add `object-fit: cover;` to `.about__avatar` in `css/about.css`.
