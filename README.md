# iDigitalMind Website

A modern, responsive website for iDigitalMind - Australian digital transformation and AI consultancy.

## 🚀 Features

- Modern React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Responsive design
- Contact forms with validation
- SEO optimized

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd idigitalmind

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `_redirects` file is already included for SPA routing

### Vercel

1. Connect your repository to Vercel
2. The `vercel.json` file is already configured
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages

1. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

### Other Platforms

For other platforms, ensure:
- Build command: `npm run build`
- Output directory: `dist`
- Configure SPA routing (all routes redirect to index.html)

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── layout/          # Layout components
│   └── ui/              # UI components
├── pages/               # Page components
├── lib/                 # Utilities
└── main.tsx            # App entry point
```

## 🔧 Configuration

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📝 License

This project is private and proprietary to iDigitalMind.

## 🤝 Support

For support, contact the development team at iDigitalMind. 