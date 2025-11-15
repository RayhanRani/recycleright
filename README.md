# Recycle Right React App

A React version of the Recycle Right web application, built with Vite and React Router.

## Prerequisites

You need Node.js installed to run this React app. If you don't have it:

**Install Node.js:**
1. Visit https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Run the installer (.pkg file on macOS)
4. Follow the installation wizard
5. Restart your terminal after installation

**Verify installation:**
```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Setup

1. Navigate to the project directory:
```bash
cd recycleright-react
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

4. Build for production:
```bash
npm run build
```

## Project Structure

- `src/components/` - Reusable React components (Nav, Footer, Hero, WelcomeModal)
- `src/pages/` - Page components (Info, AppIdea, HelpGettingStarted, HelpAccessibility, NotFound)
- `src/assets/` - Styles and assets (style.css)
- `public/images/` - Image assets

## Features

- React Router for client-side routing
- Responsive navigation with mobile toggle
- Welcome modal with accessibility features
- Contact form with validation
- All original content and styling preserved

## Routes

- `/` - Redirects to `/info`
- `/info` - Information page
- `/app` - Web App Idea page
- `/help-getting-started` - Getting Started help page
- `/help-accessibility` - Accessibility & Support page
- `*` - 404 Not Found page

