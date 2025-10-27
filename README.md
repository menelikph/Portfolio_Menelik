# Menelik Puerta - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, TailwindCSS, NextUI, and MongoDB.

## Features

- 🎨 Dark theme with purple (#7C3AED) and lilac (#C084FC) accents
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📝 Contact form with validation using react-hook-form
- 💾 MongoDB integration for storing contact submissions
- 🚀 Built with Next.js App Router
- 🎯 TypeScript for type safety
- 🎭 NextUI components for beautiful UI

## Pages

- **Home** (`/`) - Hero section with introduction and featured projects
- **Projects** (`/projects`) - Grid of all projects
- **Project Detail** (`/projects/[slug]`) - Individual project pages with details
- **Contact** (`/contact`) - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)

### Installation

1. Clone the repository
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Create a `.env.local` file in the root directory and add your MongoDB connection string:

\`\`\`env
MONGODB_URI=your_mongodb_connection_string
\`\`\`

4. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variable:

\`\`\`env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
\`\`\`

Replace with your actual MongoDB connection string.

## Project Structure (detailed)

The project follows Next.js App Router conventions. Key folders and files:

- `app/`
	- `api/contact/route.ts` — serverless API route used by the contact form to persist submissions.
	- `projects/` — listing and dynamic routes for project detail pages (`page.tsx` and `[slug]/page.tsx`).
	- `contact/page.tsx` — public contact page containing the `ContactForm` component.
	- `layout.tsx` — root layout where global providers and `globals.css` are loaded (contains `HeroUIProvider`).
	- `page.tsx` — home page with the main Hero section and featured projects.
	- `globals.css` — global styles, Tailwind directives, and theme CSS variables (including Hero UI variables).

- `components/`
	- `header.tsx` / `footer.tsx` — site chrome and navigation.
	- `contact-form.tsx` — reusable form component using `react-hook-form`.
	- `ThemeSwitcher.tsx`, `ThemeWrapper.tsx` — theme helpers (if used) to toggle dark/light classes.
	- other UI components and small composition pieces used throughout pages.

- `lib/` — utilities and services (e.g., `mongodb.ts` for DB connection, `google-auth.ts`, `projects.ts`).

- `models/` — Mongoose schema definitions such as `Contact.ts`.

- `package.json` and lockfile — dependency manifest. Use your package manager of choice (`pnpm`, `npm`).

Notes:

- `app/layout.tsx` imports `app/globals.css` — ensure this import remains so Tailwind and Hero UI styles are included in builds.
- The project may include a small `app/hero.cjs` wrapper to allow PostCSS/Tailwind to load the Hero UI plugin at build time; do not remove it without replacing the loader.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **HeroUI** - Beautiful React UI library
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM

## Customization

### Colors

The color scheme uses purple and lilac accents. To customize, edit the CSS variables in `app/globals.css`:

\`\`\`css
--primary: oklch(0.62 0.24 285);  /* Purple */
--accent: oklch(0.72 0.18 295);   /* Lilac */
\`\`\`

### Projects

Edit the projects array in `app/projects/page.tsx` and `app/projects/[slug]/page.tsx` to add your own projects.

### Contact Information

Update contact details in `app/contact/page.tsx` and `components/footer.tsx`.

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add the `MONGODB_URI` environment variable in Vercel project settings
4. Deploy!

## License

MIT License - feel free to use this template for your own portfolio!
