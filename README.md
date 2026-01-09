# Milind - Personal Portfolio Website

A modern, responsive single-page application (SPA) showcasing professional experience, skills, and education. Built with React and designed for deployment to GitHub Pages.

## Features

- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Interactive Components**: Dynamic typing effect, smooth scrolling navigation, animated skill bars
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Tech Stack

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with CSS variables, gradients, and animations
- **GitHub Pages**: Free, reliable hosting

## Sections

1. **Hero**: Eye-catching introduction with dynamic role typing effect
2. **About**: Professional summary and key achievements
3. **Experience**: Detailed work history with interactive company tabs
4. **Skills**: Comprehensive skill showcase with animated progress bars
5. **Education**: Academic background with timeline design
6. **Contact**: Multiple contact methods with social media links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd milind-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Deployment to GitHub Pages

### Step 1: Update package.json

Update the `homepage` field in [package.json](package.json) with your GitHub username and repository name:

```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `milind-portfolio` or `portfolio`
3. Don't initialize with README (we already have one)

### Step 3: Initialize Git and Push

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Personal portfolio website"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the production version of your app
2. Push it to the `gh-pages` branch
3. Make it available at your GitHub Pages URL

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your website will be live at: `https://yourusername.github.io/your-repo-name`

## Customization

### Update Personal Information

1. **Contact Information**: Update email, phone, and location in [src/components/Contact.js](src/components/Contact.js) and [src/components/Hero.js](src/components/Hero.js)

2. **Social Media Links**: Update GitHub, LinkedIn, and Twitter URLs in [src/components/Contact.js](src/components/Contact.js)

3. **Profile Photo**: Replace the placeholder SVG in [src/components/About.js](src/components/About.js) with your actual photo

4. **Resume Content**: Already populated with your information, but you can update any section as needed

### Styling

All styles use CSS variables defined in [src/index.css](src/index.css). Update these to change the color scheme:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  --success-color: #64ffda;
}
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm run deploy`
Deploys the built app to GitHub Pages

### `npm test`
Launches the test runner

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading where applicable
- Minimal bundle size
- Smooth animations with CSS transforms

## License

MIT License - feel free to use this template for your own portfolio

## Contact

Milind - [milind.fnu.791@gmail.com](mailto:milind.fnu.791@gmail.com)

Portfolio Link: [https://yourusername.github.io/your-repo-name](https://yourusername.github.io/your-repo-name)

---

**Note**: Remember to update the placeholder URLs and personal information before deploying!
