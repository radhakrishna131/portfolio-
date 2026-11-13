# 🎨 Sketch Portfolio

> **An immersive, hand-drawn 3D interactive portfolio experience built with React 19, Three.js, React Three Fiber, and GSAP.**

🌐 **Live Demo:** [https://radhakrishnasure.vercel.app/](https://radhakrishnasure.vercel.app/)

---

[![React 19](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.6-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 📖 Table of Contents

1. [✨ Overview & Architecture](#-overview--architecture)
2. [🎯 Central Customization Guide (Start Here)](#-central-customization-guide-start-here)
3. [📁 Where to Edit Specific Details](#-where-to-edit-specific-details)
   - [1. Personal Details, College, Age & Contact](#1-personal-details-college-age--contact)
   - [2. Projects & Case Studies](#2-projects--case-studies)
   - [3. Social Media Links](#3-social-media-links)
   - [4. Technical Skills](#4-technical-skills)
   - [5. Journey & Timeline](#5-journey--timeline)
   - [6. 3D Scenes, Avatars & Textures](#6-3d-scenes-avatars--textures)
   - [7. Contact Form & Anti-Spam Whitelist](#7-contact-form--anti-spam-whitelist)
   - [8. SEO & Social Share Metadata](#8-seo--social-share-metadata)
4. [⚙️ Getting Started & Local Development](#️-getting-started--local-development)
5. [☁️ Deployment Guide (Vercel & Cloudflare Pages)](#️-deployment-guide)

---

## ✨ Overview & Architecture

**Sketch Portfolio** is an interactive portfolio that blends hand-drawn sketchbook aesthetics with 3D WebGL graphics and spatial sound design.

### Core Experience Modes:
1. **Interactive 3D World (React Three Fiber / Three.js)**:
   - **Corridor**: Entrance doors leading to an infinite corridor with dynamic 3D letters splitting apart as the camera flies through.
   - **About Room**: Looping airplane flight through clouds, balloon milestones, and floating 3D typography.
   - **Gallery Room**: Paper sketches hanging on a wire with wooden clothespins; clicking a sketch reveals interactive details and case studies.
   - **Contact Room**: Floating barrels in ocean water for GitHub, LinkedIn, Twitter/X, and Email, plus an interactive "Message in a Bottle" paper submission system.
2. **2D Accessible & Responsive Overlay (HTML / SCSS / GSAP)**:
   - Clean, accessible layout for screen readers, mobile devices, and users with motion sensitivity.
   - Sections for Hero, About, Projects showcase, Skills matrix, Journey timeline, Contact form, and Footer.

---

## 🎯 Central Customization Guide (Start Here)

To make updating your portfolio effortless, all key personal details are centralized in one file:

📂 **[`src/config/personalInfo.js`](file:///storage/emulated/0/sketch-portfolio/src/config/personalInfo.js)**

Editing this single file will automatically update:
- Both 2D HTML sections (Hero, About, Contact, Footer)
- All 3D rooms (Corridor letters, Door badges, About sky text, Floating barrels)
- Screen reader accessibility labels and dynamic page titles

---

## 📁 Where to Edit Specific Details

### 1. Personal Details, College, Age & Contact
Open [`src/config/personalInfo.js`](file:///storage/emulated/0/sketch-portfolio/src/config/personalInfo.js):

```javascript
export const personalInfo = {
  // Identity
  name: "Radha Krishna",
  shortName: "RADHA",        // Shown in large 3D floating letters in the corridor
  brandName: "RADHA.DEV",    // Displayed on corridor side walls
  handle: "@radhakrishna",   // Badge on the front entrance doors
  title: "Creative Engineer & AI/ML Student",

  // Education, College & Age
  education: {
    degree: "B.Tech in Computer Science & Machine Learning (CSM)",
    shortDegree: "B.Tech CSM",
    year: "2nd Year",
    college: "Your College / University Name", // <-- Edit your college name here
    status: "Undergraduate Student",
    graduationYear: "2028"
  },
  age: "19",                 // <-- Edit your age here

  // Location & Email
  location: "Guntur, Andhra Pradesh, India",
  timezone: "India 🇮🇳 (UTC +5:30)",
  email: "radhakrishna628191@gmail.com",       // <-- Edit your contact email here
  domain: "https://radhakrishnasure.vercel.app",

  // Biography & Mission
  bio: {
    heading: "Building Intelligent & Creative Experiences.",
    subheading: "Where Artificial Intelligence, Motion, and Modern Web Engineering Converge.",
    intro: "Your introduction paragraph...",
    paragraph2: "Your academic background and key achievements...",
    paragraph3: "Your vision and technical passions...",
    mission: "Your personal mission statement..."
  },

  // Key Statistics
  stats: [
    { value: "12+", label: "Projects Shipped" },
    { value: "500+", label: "Students Helped" },
    { value: "2nd", label: "Year B.Tech CSM" },
    { value: "800+", label: "GitHub Contributions" },
    { value: "15+", label: "Technologies Explored" }
  ]
};
```

---

### 2. Projects & Case Studies
Open [`src/data/projects.js`](file:///storage/emulated/0/sketch-portfolio/src/data/projects.js):

Here you can add new projects, update project descriptions, change preview images, or edit case study deep-dives.

```javascript
export const projects = [
  {
    id: "must-material",                 // Unique URL-friendly ID
    title: "MUST Material",               // Project title
    category: "Educational Resource Platform",
    shortDescription: "An educational website for engineering students to access study materials, notes, and resources.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Detailed overview of what the project does and who it helps...",
      challenge: "The core technical or design problem you tackled...",
      approach: "How you designed and structured the solution...",
      solution: "The final architecture and user experience...",
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase", "Vercel"],
      keyFeatures: [
        "Organized study materials by subject and semester",
        "Search functionality for quick access",
        "Previous year question papers collection",
        "Cloud-backed data with Firebase"
      ],
      performance: "Optimized for fast loading and low bandwidth.",
      outcome: "Helped hundreds of students access notes easily.",
      results: "Over 500 active student users per month."
    }
  },
  // Add more project objects here...
];
```

> [!TIP]
> **To add a project:** Duplicate one of the objects in `src/data/projects.js`, change the `id`, fill in your title, image URL, and descriptions. It will automatically appear in the 2D Work section and in the case study modal!

---

### 3. Social Media Links
Social links appear in 3 places:
1. **Footer** (`src/sections/Footer.jsx`)
2. **Contact Section** (`src/sections/Contact.jsx`)
3. **3D Floating Barrels in Contact Room** (`src/components/canvas/rooms/Contact/ContactRoom.jsx`)

All 3 locations automatically pull from [`src/config/personalInfo.js`](file:///storage/emulated/0/sketch-portfolio/src/config/personalInfo.js):

```javascript
socials: {
  github: "https://github.com/radhakrishna",
  linkedin: "https://linkedin.com/in/radhakrishna",
  twitter: "https://twitter.com/radhakrishna",
  instagram: "https://instagram.com/yourhandle"
}
```

Simply replace the URLs above with your actual profile links!

---

### 4. Technical Skills
Open [`src/data/skills.js`](file:///storage/emulated/0/sketch-portfolio/src/data/skills.js):

```javascript
export const skillsData = [
  {
    category: "Web Development",
    description: "Building modern, responsive, and interactive websites and web applications.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Firebase", "Vercel"]
  },
  {
    category: "AI/ML",
    description: "Learning and building intelligent systems with machine learning and data science.",
    skills: ["Python", "Machine Learning", "TensorFlow.js", "Data Science", "AI Fundamentals"]
  },
  // Add or modify skill categories here...
];
```

---

### 5. Journey & Timeline
Open [`src/data/journey.js`](file:///storage/emulated/0/sketch-portfolio/src/data/journey.js):

```javascript
export const journeyData = [
  {
    phase: "Stage 01",
    title: "Web Development Basics",
    period: "Foundational Phase",
    description: "Started the journey with HTML, CSS, and JavaScript. Learned semantic markup and core programming."
  },
  {
    phase: "Stage 02",
    title: "Frontend Development",
    period: "Growth Phase",
    description: "Expanded skills in responsive design, CSS frameworks, and component-based React architecture."
  },
  // Add or customize stages here...
];
```

---

### 6. 3D Scenes, Avatars & Textures

Textures and hand-drawn assets are stored in [`public/textures/`](file:///storage/emulated/0/sketch-portfolio/public/textures/) and [`public/images/`](file:///storage/emulated/0/sketch-portfolio/public/images/).

| Element | Location | File to Replace / Edit |
| :--- | :--- | :--- |
| **Corridor Avatar** | 3D Corridor | `public/images/avatar-hero.webp` |
| **3D Floating Letters** | 3D Corridor | Configured via `shortName` in `src/config/personalInfo.js` |
| **Wall Brand Sign** | 3D Corridor Wall | Configured via `brandName` in `src/config/personalInfo.js` |
| **Door Badge** | Entrance Doors | Configured via `handle` in `src/config/personalInfo.js` |
| **About Sky Avatar** | 3D About Room | `public/textures/about/awatarnachmurce.webp` |
| **Gallery 3D Sketches** | 3D Gallery Room | Textures in `public/textures/gallery/` & `src/components/canvas/rooms/Gallery/GalleryRoom.jsx` |
| **Favicon & Icons** | Browser Tab | `public/favicon.svg`, `public/favico.png` |

---

### 7. Contact Form & Anti-Spam Whitelist

The contact form uses [Web3Forms](https://web3forms.com/) for zero-backend email delivery.

1. **Get a free API key** at [web3forms.com](https://web3forms.com/).
2. **Add it to your environment variables**:
   Create a `.env` file in the project root:
   ```env
   VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
   ```
3. **Domain Whitelist**:
   The 3D "Message in a Bottle" form in [`src/components/canvas/rooms/Contact/MessagePaper.jsx`](file:///storage/emulated/0/sketch-portfolio/src/components/canvas/rooms/Contact/MessagePaper.jsx) includes an origin check for security. Ensure your live domain is listed in `ALLOWED_ORIGINS`:
   ```javascript
   const ALLOWED_ORIGINS = [
     'radhakrishnasure.vercel.app',
     'localhost',
     '127.0.0.1'
   ];
   ```

---

### 8. SEO & Social Share Metadata

1. **HTML Meta Tags**: Check [`index.html`](file:///storage/emulated/0/sketch-portfolio/index.html) (lines 8–75) for:
   - `<title>`
   - `<meta name="description">`
   - Open Graph (`og:title`, `og:description`, `og:url`)
   - Structured Data (`schema.org` JSON-LD person & website schema)
2. **Dynamic Room Titles**: [`src/hooks/useDocumentMeta.js`](file:///storage/emulated/0/sketch-portfolio/src/hooks/useDocumentMeta.js) automatically updates the page title as visitors walk into each 3D room.

---

## ⚙️ Getting Started & Local Development

### Prerequisites
- **Node.js 18+** or **Node.js 20+**
- **npm** or **yarn** / **pnpm**

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This generates optimized static files in the `dist/` directory.

---

## ☁️ Deployment Guide

### Option 1: Deploy on Vercel (Fastest & Recommended)

1. Push your repository to **GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio with personal details"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New...** > **Project**.
3. Import your GitHub repository (`sketch-portfolio`).
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. (Optional) In **Environment Variables**, add:
   - `VITE_WEB3FORMS_KEY` = `your_key_here`
8. Click **Deploy**!

---

### Option 2: Deploy on Cloudflare Pages

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** > **Create application** > **Pages** tab.
2. Select **Connect to Git** and pick your repository.
3. Configure build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Environment Variables**: Add `NODE_VERSION` = `20`
4. Click **Save and Deploy**.

---

<p align="center">
  Crafted with ❤️ using React 19, Three.js, and GSAP.
</p>
