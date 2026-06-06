# BioAI Lab - React Application

This is a React conversion of the deepiotics-bioai.html file, maintaining all the original design, animations, themes, and colors.

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:
```bash
npm run build
```

## Features

- ✅ Exact same design and layout as original HTML
- ✅ All animations preserved (particle canvas, orbs, fade-in effects)
- ✅ All color themes and gradients maintained
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Smooth scroll animations
- ✅ Interactive components (announcement bar, navigation)
- ✅ React Router for navigation
- ✅ All sections included:
  - Hero with animated particle canvas
  - Audience Split
  - Training courses
  - Workshop section
  - Services
  - Proof/Stats
  - Why section
  - Testimonials
  - Global reach
  - CTA section
  - Footer

## Routes

- `/` - Home page with all sections
- `/bioai-lab` - BioAI Lab Course detailed page

## Project Structure

```
src/
├── components/
│   ├── AnnouncementBar.js
│   ├── Navigation.js
│   ├── Hero.js
│   ├── ParticleCanvas.js
│   ├── AudienceSplit.js
│   ├── Training.js
│   ├── Workshop.js
│   ├── Services.js
│   ├── Proof.js
│   ├── Why.js
│   ├── Testimonials.js
│   ├── Global.js
│   ├── CTA.js
│   └── Footer.js
├── pages/
│   ├── HomePage.js
│   ├── BioAILabPage.js
│   └── BioAILabPage.css
├── hooks/
│   └── useScrollAnimation.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 with CSS Variables
- Canvas API for particle animations
- Intersection Observer API for scroll animations
- Google Fonts (Cormorant Garamond, Outfit, Space Mono)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
