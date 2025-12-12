# Portfolio - Senior Backend Engineer

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎯 Multiple sections: About, Experience, Skills, Projects, Contact
- 🔗 Social media integration
- 📧 Contact form with email copy functionality

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Material Symbols, Lucide React
- **Fonts**: Inter, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy on Render

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name**: portfolio (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 20.x (or higher)
6. Click "Create Web Service"

Render will automatically:
- Install dependencies
- Build the Next.js application
- Start the production server

### Environment Variables

No environment variables are required for basic deployment. If you need to add any later, you can configure them in the Render dashboard under "Environment" tab.

## Project Structure

```
portfolio/
├── app/
│   ├── contact/          # Contact page
│   ├── experience/       # Experience page
│   ├── projects/         # Projects page
│   ├── skills/           # Skills page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, Experience, etc.)
│   └── ui/               # Reusable UI components
├── public/
│   └── images/           # Static images
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project - All rights reserved
