import { notFound } from "next/navigation";
import ProjectDetail, { Project } from "@/components/project-detail";

const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring product management, shopping cart, and Stripe payment integration.",
    longDescription:
      "This comprehensive e-commerce platform was built to provide a seamless shopping experience for users while offering robust management tools for administrators. The project showcases advanced Next.js features including server-side rendering, API routes, and optimized image handling. The integration with Stripe ensures secure payment processing, while MongoDB provides flexible data storage for products, orders, and user information.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: [
      "Product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe integration",
      "Order management and tracking",
      "Admin dashboard for product management",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing real-time inventory management",
      "Optimizing performance for large product catalogs",
      "Ensuring secure payment processing",
    ],
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features.",
    longDescription:
      "A modern task management application designed for teams to collaborate effectively. Built with React and Socket.io for real-time updates, this app allows teams to organize projects, assign tasks, and track progress seamlessly. The drag-and-drop interface makes it intuitive to reorganize tasks and priorities.",
    image: "/task-management-dashboard.png",
    tags: ["React", "MongoDB", "Socket.io", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task organization",
      "Project and task categorization",
      "Team member assignment",
      "Progress tracking and analytics",
      "Notification system",
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Optimizing drag-and-drop performance",
      "Managing complex state with multiple concurrent updates",
    ],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    longDescription:
      "An interactive weather dashboard that provides comprehensive weather information with beautiful visualizations. The app integrates with multiple weather APIs to provide accurate forecasts and historical data.",
    image: "/weather-dashboard-dark-theme.jpg",
    tags: ["React", "API Integration", "Charts", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: [
      "Current weather conditions",
      "7-day forecast",
      "Interactive weather maps",
      "Historical weather data",
      "Location-based search",
      "Weather alerts and notifications",
    ],
    challenges: [
      "Integrating multiple weather APIs",
      "Creating responsive data visualizations",
      "Handling geolocation and permissions",
    ],
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    description:
      "No-code portfolio builder allowing users to create beautiful portfolio websites with customizable templates.",
    longDescription:
      "A powerful no-code solution for creating professional portfolio websites. Users can choose from various templates, customize colors and layouts, and publish their portfolio with a single click.",
    image: "/portfolio-builder-interface.png",
    tags: ["Next.js", "CMS", "Tailwind", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: [
      "Multiple customizable templates",
      "Drag-and-drop editor",
      "Custom domain support",
      "SEO optimization",
      "Analytics integration",
      "Export functionality",
    ],
    challenges: [
      "Building a flexible template system",
      "Implementing real-time preview",
      "Ensuring generated sites are performant",
    ],
  },
  {
    id: "chat-application",
    title: "Real-Time Chat App",
    description:
      "Modern chat application with real-time messaging, file sharing, and group chat capabilities.",
    longDescription:
      "A feature-rich chat application built for modern communication needs. Supports one-on-one messaging, group chats, file sharing, and more, all with real-time updates.",
    image: "/chat-application-dark-interface.jpg",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: [
      "Real-time messaging",
      "Group chat support",
      "File and image sharing",
      "Message reactions",
      "User presence indicators",
      "Message search",
    ],
    challenges: [
      "Implementing WebSocket connections at scale",
      "Handling file uploads efficiently",
      "Managing message history and pagination",
    ],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard with data visualization, reporting, and real-time metrics tracking.",
    longDescription:
      "A powerful analytics platform that transforms raw data into actionable insights. Features interactive charts, customizable reports, and real-time data updates.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tags: ["Next.js", "D3.js", "TypeScript", "API"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: [
      "Interactive data visualizations",
      "Custom report builder",
      "Real-time metrics",
      "Data export functionality",
      "Multiple chart types",
      "Responsive design",
    ],
    challenges: [
      "Optimizing performance with large datasets",
      "Creating flexible visualization components",
      "Implementing complex data aggregations",
    ],
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
