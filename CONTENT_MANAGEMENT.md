# Portfolio Content Management Guide

## 📁 How to Upload and Manage Your Works

### Adding a New Project

1. **Add Project Image**
   - Place your project image/screenshot in: `src/assets/images/`
   - Supported formats: PNG, JPG, JPEG
   - Recommended size: 1200x630px for best display

2. **Update Projects Data**
   - Open: `src/data/projects.ts`
   - Add a new project object to the `projects` array:

   ```typescript
   {
     title: 'Your Project Name',
     images: require('../assets/images/YourImage.png'),
     description: 'Brief description of your project (2-3 sentences)',
     link: 'https://your-project-url.com',
     category: 'Web Development', // or 'E-commerce', 'Mobile Apps', 'Open Source'
     tags: ['React', 'Node.js', 'API'], // Add relevant technologies
     featured: true // Set to true to showcase on homepage
   }
   ```

3. **Save and View**
   - Save the file
   - The portfolio will auto-refresh
   - Your new project appears instantly!

### Project Categories

Choose from these categories:
- **E-commerce**: Online stores, payment systems
- **Web Development**: Websites, web apps
- **Mobile Apps**: iOS/Android applications
- **Open Source**: GitHub projects, libraries

### Project Tags

Add relevant technology tags:
- Languages: `JavaScript`, `Python`, `TypeScript`, `C`, `Dart`
- Frameworks: `React`, `Flutter`, `Node.js`, `Next.js`
- Tools: `TailwindCSS`, `Firebase`, `MongoDB`, `AWS`
- Features: `AI`, `API`, `E-commerce`, `SaaS`, `Real-time`

### Featured Projects

Set `featured: true` to highlight your best work:
- Featured badge appears on project card
- Gets priority display
- Perfect for showcasing to potential employers

---

## 🎨 Updating Other Portfolio Sections

### Skills
File: `src/components/Skills.tsx`
- Update the `skills` array (line ~7)
- Add new skills with image, level, and category

### Education
File: `src/components/Education.tsx`
- Update the `educationData` array (line ~5)
- Add institution, degree, dates, and courses

### Certifications
File: `src/components/Certifications.tsx`
- Update the `certificationsData` array
- Add title, issuer, date, link, and certificate image

### Contact Information
File: `src/components/Contact.tsx`
- Update email, phone, location (line ~50-70)
- Modify social media links

---

## 🚀 Quick Start

1. **Start Development Server**
   ```bash
   npm start
   ```

2. **Make Changes**
   - Edit files as needed
   - Changes appear instantly in browser

3. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📸 Image Guidelines

### Project Screenshots
- **Size**: 1200x630px (16:9 ratio)
- **Format**: PNG or JPG
- **Quality**: High quality, clear visuals
- **Content**: Show main interface/feature

### Certification Images
- **Size**: 800x600px or original certificate size
- **Format**: PNG (preserves quality)
- **Content**: Full certificate with credentials

---

## 💡 Pro Tips

1. **Keep descriptions concise** - 2-3 sentences max
2. **Use action verbs** - "Built", "Developed", "Implemented"
3. **Highlight impact** - User count, performance gains
4. **Update regularly** - Add projects as you complete them
5. **Test links** - Ensure all project links work

---

## 🎯 Portfolio Structure

```
src/
├── components/        # UI Components
│   ├── Hero.tsx      # Landing section
│   ├── About.tsx     # About me
│   ├── Portfolio.tsx # Projects showcase
│   ├── Skills.tsx    # Technical skills
│   ├── Education.tsx # Academic background
│   ├── Certifications.tsx
│   ├── Contact.tsx   # Contact form
│   └── Footer.tsx    # Footer section
│
├── data/             # Content Management
│   └── projects.ts   # Projects data
│
└── assets/
    └── images/       # All images/screenshots
```

---

## 🔧 Need Help?

If you encounter issues:
1. Check console for errors (F12 → Console tab)
2. Ensure image paths are correct
3. Verify all required fields are filled
4. Restart dev server: `Ctrl+C` then `npm start`

---

**Happy showcasing! 🚀**
