# 🖥️ Retro Portfolio
 
A retro-themed personal portfolio built with a floppy disk navigation concept. Each floppy disk navigates to a different page — insert it into the CRT computer and watch it boot up.
 
---
 
## ✨ Features
 
- **Floppy disk navigation** — click a disk, watch it animate into the computer slot and boot the page
- **Custom CRT computer component** — with scanlines, phosphor glow and typewriter text effect
- **Smooth scroll snapping** — between hero and PC sections on the home page
- **GSAP animations** — MotionPath, TextPlugin, ScrollTrigger and more
- **Retro design** — authentic Apple Beige color palette, dot grid backgrounds and CRT effects
- **Mobile first** — horizontal scroll carousel for projects on mobile, grid layout on desktop
- **About page** — CV-style layout with education, work experience and skills
---
 
## 🛠️ Tech Stack
 
| Technology | Use |
|---|---|
| React + Vite | Core framework and build tool |
| Tailwind CSS v4 | Styling |
| GSAP | Animations (MotionPath, ScrollTrigger, TextPlugin) |
| React Router | Client-side routing |
| @dev.icons/react | Tech skill icons |
 
---
 
## 📁 Project Structure
 
```
src/
├── animations/       # GSAP animation functions
│   ├── animations.js # Floppy disk insert animation
│   └── scroll.js     # ScrollTrigger snap scroll
├── assets/           # Images and static files
├── components/       # Reusable components
│   ├── Computer.jsx  # CRT computer with scanlines
│   ├── FloppyDisk.jsx # Animated floppy disk nav
│   ├── Hero.jsx      # Hero section
│   └── ProjectCard.jsx
├── data/             # Static data
│   └── projects.js   # Project array
├── pages/            # Route pages
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── App.jsx
```
 
---
 
## 🌐 Live
 
[portfolio-marko-antonio.netlify.app](https://portfolio-marko-antonio.netlify.app/)
 
---
 
## 🎨 Design Decisions
 
- **Apple Beige (`#C4C0AA`)** — the authentic color of old Macintosh computers, yellowed plastic and all
- **VT323 + Permanent Marker** — retro terminal font for the computer screen, handwritten marker for headings
- **DM Sans** — clean modern font for the About page to contrast the retro elements
- **Dot grid background** on the skills section for a modern tech feel inside the retro shell
---
 
## 👨‍💻 Author
 
**Marko-Antonio Linnér Carvajl**
- GitHub: [@0-One-0](https://github.com/0-One-0)
- Portfolio: [portfolio-marko-antonio.netlify.app](https://portfolio-marko-antonio.netlify.app/)
 