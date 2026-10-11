export interface Project {
  number: string;
  title: string;
  role: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
  visual: "realtime" | "architecture" | "angular" | "production";
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Appointment Management System",
    role: "Senior Front-End Developer",
    category: "REAL-TIME APPLICATION",
    description:
      "Built the front-end application from the ground up, taking ownership of complex features, technical implementation, and a reusable UI system designed for consistency and flexibility.",
    highlights: [
      "Built a reusable component system without a third-party UI library.",
      "Implemented real-time notifications using WebSocket.",
      "Integrated APIs, state handling, validation, and complex application workflows.",
      "Reviewed code and guided a junior developer, with a focus on maintainability and front-end best practices.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "WebSocket"],
    featured: true,
    visual: "realtime",
  },
  {
    number: "02",
    title: "Large-Scale SaaS HR Platform",
    role: "Mid-Level Front-End Developer",
    category: "SAAS · CUSTOM UI SYSTEM",
    description:
      "Contributed to building a large-scale SaaS platform from the ground up, with numerous modules and evolving business workflows.",
    highlights: [
      "Evaluated requirements, technical feasibility, dependencies, and potential conflicts with existing functionality.",
      "Helped establish a reusable component architecture from scratch.",
      "Built highly customizable UI components without a third-party UI library.",
      "Implemented pixel-conscious interfaces and reviewed junior developers' code.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    visual: "architecture",
  },
  {
    number: "03",
    title: "Visitor Management System",
    role: "Front-End Developer",
    category: "APPLICATION DEVELOPMENT",
    description:
      "Contributed to building an Angular application from the ground up, taking primary ownership of UI development and front-end implementation.",
    highlights: [
      "Developed complete modules with forms, tables, filters, and pagination.",
      "Implemented routing, authentication, and REST API integrations.",
      "Built reusable components and responsive interfaces.",
      "Implemented complex form validation using Angular Reactive Forms and RegEx.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
    visual: "angular",
  },
  {
    number: "04",
    title: "HR Management System",
    role: "Front-End Developer",
    category: "PRODUCTION · MAINTENANCE",
    description:
      "Maintained and enhanced a live HR management system used by multiple clients, delivering client-specific features while preserving application stability.",
    highlights: [
      "Translated business requirements into production-ready front-end changes.",
      "Delivered client-specific features and customizations.",
      "Integrated APIs and handled testing, debugging, and production support.",
      "Investigated and resolved client-reported issues and production bugs.",
    ],
    technologies: ["Angular", "TypeScript", "Angular Material", "REST APIs"],
    visual: "production",
  },

  {
    number: "05",
    title: "Mindora — Mental Wellness Platform",
    role: "Personal Project · In Development",
    category: "Product Design & Front-End Engineering",
    description:
      "A mental wellness platform designed to help users build healthier habits, track their progress, and access supportive activities through a calm, intuitive experience.",
    highlights: [
      "Building a responsive application with Next.js, React, and TypeScript.",
      "Developing reusable UI components and consistent design tokens without a third-party UI library.",
      "Creating experiences for counselor discovery, guided activities, and personal progress tracking.",
      "Structuring interactive features and reusable page components with maintainability in mind.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS v4"],
    visual: "architecture",
  },
];
