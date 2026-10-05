# Minimalist personal portfolio

React + Vite implementation of the supplied portfolio screenshot and HTML. The page uses the original neutral layout, reusable React components, and the supplied imagery.

Desktop visitors with a fine pointer get Neko.js, a small animated cat that follows the cursor. It is skipped for touch-only devices and users who prefer reduced motion.

## Run

npm install
npm run dev

## Checks

npm run lint
npm run build
npm run preview

## Folder structure

- src/components: shared navigation, cards, icons, tags, section headings and dialog.
- src/data/portfolio.js: profile, social links, experience, projects, skills and education.
- src/data/images.json: image URLs from the original reference HTML.
- src/sections: About, Experience, Work, resume overview and Contact.
- src/pages/ResumePage.jsx: dedicated full-page PDF preview at /resume.
- src/styles/portfolio.css: layout, component styles, responsive and print styles.
- src/index.css: global styles.
- src/App.jsx: page composition.

The identity, email, LinkedIn and GitHub links, recent employment, skills, two projects and degrees were updated from Akshat Vijayvergiya's resume. Images still use the external URLs supplied in the design reference.

The resume does not include availability status, shipped project count, or contribution history, so those profile fields remain from the design. The two project entries from the resume remain alongside Vapor, which was added from your project details. The original profile portrait and two reference project images are unchanged. The CV still shows the reference's 2025 label. Please verify these sample details before publishing.

Section navigation and the mobile menu work. Project cards open accessible dialogs. Copy Email confirms success and Send Message opens the mail app. Put the current resume at public/Akshat_Vijayvergiya_Resume_FullStackDeveloper.pdf; the Download Resume PDF buttons link directly to this file.




