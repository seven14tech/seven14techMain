# Seven14Tech - Premium Digital Agency

A high-performance, aesthetically premium portfolio website for **Seven14Tech**, a creative agency specializing in web design, desktop applications, and SEO growth.

![Seven14Tech](public/file.svg)

## 🚀 Technical Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: CSS Modules (Zero-runtime overhead, scoped styles)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform) + `@gsap/react`
- **Language**: TypeScript
- **Font**: Geist Sans & Mono

## ✨ Key Features

### 1. **Premium "Dark Portfolio" Aesthetic**
- **Theme**: Deep Black (`#0a0a0a`) background with Lime Green (`#a3c139`) and Gold accents.
- **Visuals**: Clean, minimalist layout with high-contrast typography.

### 2. **Advanced Animations**
- **Loading Screen**: A cinematic 0-100% counter that fades seamlessly into the homepage.
- **Hero Section**: "SEVEN" and "14TECH" text slides up with staggered timing.
- **Content Strips**: Interactive service columns that cascade into view.
- **Intro Card**: 3D rotation effect on scroll using ScrollTrigger.

### 3. **Search Engine Optimization (SEO)**
- **Metadata**: Fully optimized `title`, `description`, and `keywords` for all pages.
- **Open Graph**: Social media preview cards (Twitter/Facebook).
- **Indexing**: Auto-generated `sitemap.xml` and `robots.txt`.

### 4. **Components**
- **Sticky Navbar**: Glassmorphism effect with blurred background.
- **PageHeader**: Reusable, animating headers for inner pages (Services, Contact, About).
- **Service Strips**: Hover-interactive vertical accordions.

## 🛠️ Getting Started

First, install the dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

\`\`\`
src/
├── app/
│   ├── about/        # About Us page
│   ├── contact/      # Contact form page
│   ├── services/     # Service listings
│   ├── globals.css   # Global variables & reset
│   ├── layout.tsx    # Root layout & Metadata
│   └── page.tsx      # Homepage (Hero, Intro, Strips)
├── components/
│   ├── HeaderPortfolio.tsx  # Hero Section
│   ├── Navbar.tsx           # Sticky Navigation
│   ├── ContentStrips.tsx    # Services Animation
│   ├── LoadingScreen.tsx    # 0-100% Loader
│   └── ...
└── ...
\`\`\`

## 🎨 Customization

- **Colors**: Edit `src/app/globals.css` to change `--accent` or `--background`.
- **Content**: Update text in individual pages or components (e.g., `HeaderPortfolio.tsx` for the Hero text).

---
© 2024 Seven14Tech. All Rights Reserved.
"# seven14techMain" 
