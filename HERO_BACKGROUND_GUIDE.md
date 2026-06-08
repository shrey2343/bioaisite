# Hero Section Background - Setup Guide

## What I've Done

### 1. Fixed Section Color Alternating
✅ Fixed the green/white section alternating pattern across all pages
✅ Proper color sequence: 
   - Hero: Light (--bg)
   - Who Are You: Gray (--bg2)
   - Audience Split: Light (--bg)
   - Training: Gray (--bg2)
   - Workshop: Dark Green (--bg-dark)
   - Services: Light (--bg)
   - Why Us: Dark Green (--bg-dark)
   - Testimonials: Gray (--bg2)
   - Blog/Global: Dark Green (--bg-dark)
   - CTA: Dark Green (--bg-dark)

### 2. Added Background Image/Video Support
✅ Hero section now supports both background images and videos
✅ Added semi-transparent overlay for better text readability
✅ All content stays above the background (proper z-index layering)

## How to Add Your Background

### Option 1: Add a Background Image

1. **Place your image** in the `public` folder (e.g., `public/hero-bg.jpg`)

2. **Open** `src/components/Hero.js`

3. **Uncomment this line** (around line 19):
   ```jsx
   <div className="hero-bg-image" style={{backgroundImage: 'url(/hero-bg.jpg)'}}></div>
   ```

4. **Replace** `/hero-bg.jpg` with your actual image filename

**Example:**
```jsx
<div className="hero-bg-image" style={{backgroundImage: 'url(/Bioai hero page logo.png)'}}></div>
```

### Option 2: Add a Background Video

1. **Place your video** in the `public` folder (e.g., `public/hero-video.mp4`)

2. **Open** `src/components/Hero.js`

3. **Uncomment these lines** (around line 15-17):
   ```jsx
   <video className="hero-bg-video" autoPlay muted loop playsInline>
     <source src="/hero-video.mp4" type="video/mp4" />
   </video>
   ```

4. **Replace** `/hero-video.mp4` with your actual video filename

### Adjusting the Overlay Opacity

If your background is too dark or too light, adjust the overlay in `src/App.css`:

Find this section (around line 148):
```css
.hero::before {
  background:linear-gradient(135deg, rgba(250,249,246,0.92) 0%, rgba(250,249,246,0.85) 100%);
}
```

**Make it more transparent** (see more of background):
- Change `0.92` to `0.7` and `0.85` to `0.6`

**Make it more opaque** (see less of background):
- Change `0.92` to `0.95` and `0.85` to `0.95`

## Current Hero Structure

```
<section className="hero">
  <!-- Background Video (optional) -->
  <!-- Background Image (optional) -->
  <ParticleCanvas />  <!-- Animated particles -->
  <div className="orb orb1"></div>  <!-- Decorative orbs -->
  <div className="orb orb2"></div>
  <div className="orb orb3"></div>
  <div className="hero-inner">
    <!-- Your hero content -->
  </div>
</section>
```

## Tips

- Use high-quality images (at least 1920x1080px)
- Use videos under 10MB for faster loading
- Consider using WebP format for images (better compression)
- Test on mobile devices - the overlay helps maintain readability

## Need Help?

If you want to:
- Use a different overlay color
- Add multiple background images (slider)
- Add parallax effect to the background
- Use an external video (YouTube/Vimeo)

Just let me know!
