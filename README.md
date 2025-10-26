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

## Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic project detail page
│   │   └── page.tsx              # Projects listing page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── layout.tsx                # Root layout with Header & Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── header.tsx                # Navigation header
│   ├── footer.tsx                # Footer component
│   ├── contact-form.tsx          # Contact form with validation
│   └── project-detail.tsx        # Project detail component
├── lib/
│   └── mongodb.ts                # MongoDB connection utility
├── models/
│   └── Contact.ts                # Mongoose Contact model
└── package.json
\`\`\`

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **NextUI** - Beautiful React UI library
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
