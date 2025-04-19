# Vite Template

A modern, optimized template for building beautiful React applications with Vite, Tailwind CSS, and Shadcn UI.

## Features

- ⚡ **Vite** - Lightning fast builds and HMR
- 🧩 **React 18** - The latest React features
- 🔤 **TypeScript** - Type safety for better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Shadcn UI** - Beautiful, accessible component library
- 🌙 **Dark Mode** - Automatic and manual theme switching
- 🧹 **ESLint** - Linting for code quality
- 📊 **Bundle Analyzer** - Visualize your bundle size
- 🔄 **Type Checking** - Runtime type checking during development
- 🌐 **Environment Variables** - Properly typed environment variables

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Analyze bundle size
npm run analyze
```

## Project Structure

```
├── public               # Static assets
├── src
│   ├── components       # Reusable components
│   │   ├── ui           # UI components from shadcn/ui
│   │   └── ...          # Custom components
│   ├── hooks            # Custom React hooks
│   ├── layouts          # Layout components
│   ├── lib              # Utility functions and libraries
│   ├── pages            # Page components
│   ├── App.css          # App-specific styles
│   ├── App.tsx          # Main App component
│   ├── env.d.ts         # TypeScript declarations for env vars
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── .env                 # Default environment variables
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore file
├── components.json      # Shadcn UI configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Themes

To customize the theme, modify the CSS variables in `src/index.css`.

### Components

Shadcn UI components can be added or customized using the CLI:

```bash
npx shadcn-ui@latest add button
```

## License

This project is licensed under the MIT License.