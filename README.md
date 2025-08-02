# Landing Page

A modern, performance-optimized landing page built with Next.js 15, TypeScript, and Tailwind CSS 3.4.17.

## 🚀 Features

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS 3.4.17** - Utility-first CSS framework (version < 3.8 as requested)
- **Performance Optimized** - Fast loading with optimized builds
- **Responsive Design** - Mobile-first approach
- **SEO Ready** - Meta tags, Open Graph, and Twitter cards
- **Modern UI** - Clean and professional design
- **Best Practices** - Well-structured codebase following Next.js conventions

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles with Tailwind
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/              # UI components
├── lib/                  # Utility libraries
│   ├── config.ts        # Site configuration
│   └── utils.ts         # Utility functions
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
└── styles/              # Additional styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Utilities**: clsx, tailwind-merge
- **Linting**: ESLint with Next.js config

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Site Configuration

Edit `src/lib/config.ts` to customize:
- Site name and description
- Social media links
- Navigation items

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Use Tailwind classes directly

### Components

- Header: `src/components/layout/Header.tsx`
- Footer: `src/components/layout/Footer.tsx`
- Homepage: `src/app/page.tsx`

## 📱 Performance Features

- **Static Generation** - Pages are pre-rendered at build time
- **Image Optimization** - Next.js Image component for optimized images
- **Code Splitting** - Automatic code splitting for better performance
- **Tree Shaking** - Unused CSS is automatically removed
- **Minification** - Production builds are minified

## 🔧 Development

### Adding New Pages

1. Create a new file in `src/app/` (e.g., `about/page.tsx`)
2. Export a default React component
3. The page will be automatically available at `/about`

### Adding New Components

1. Create components in `src/components/`
2. Use TypeScript for type safety
3. Follow the existing component patterns

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Use the `cn()` utility for conditional classes
- Follow mobile-first responsive design
- Use semantic HTML elements

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
