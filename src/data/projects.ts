import projectEditorial from "@/assets/project-editorial.jpg";
import projectLogos from "@/assets/project-logos.jpg";
import projectBranding from "@/assets/project-branding.jpg";
import projectPackaging from "@/assets/project-packaging.jpg";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  services: string;
  duration: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Revista Editorial",
    category: "Editorial",
    image: projectEditorial,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "Cliente Editorial",
    year: "2024",
    services: "Design Editorial, Layout, Diagramação",
    duration: "3 meses",
    gallery: [projectEditorial, projectEditorial, projectEditorial, projectEditorial],
  },
  {
    id: 2,
    title: "Identidades Visuais",
    category: "Logos",
    image: projectLogos,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "Cliente Logos",
    year: "2024",
    services: "Criação de Logo, Identidade Visual",
    duration: "2 meses",
    gallery: [projectLogos, projectLogos, projectLogos, projectLogos],
  },
  {
    id: 3,
    title: "Branding Completo",
    category: "Branding",
    image: projectBranding,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "Cliente Branding",
    year: "2024",
    services: "Branding, Identidade Visual, Manual de Marca",
    duration: "4 meses",
    gallery: [projectBranding, projectBranding, projectBranding, projectBranding],
  },
  {
    id: 4,
    title: "Design de Embalagem",
    category: "Packaging",
    image: projectPackaging,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "Cliente Packaging",
    year: "2024",
    services: "Design de Embalagem, Mockups, Prototipagem",
    duration: "2 meses",
    gallery: [projectPackaging, projectPackaging, projectPackaging, projectPackaging],
  },
  {
    id: 5,
    title: "Identidade Corporativa",
    category: "Branding",
    image: projectBranding,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "Cliente Corporativo",
    year: "2023",
    services: "Branding Corporativo, Papelaria, Comunicação Visual",
    duration: "5 meses",
    gallery: [projectBranding, projectBranding, projectBranding, projectBranding],
  },
  {
    id: 6,
    title: "Catálogo Premium",
    category: "Editorial",
    image: projectEditorial,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "Cliente Premium",
    year: "2023",
    services: "Design Editorial, Fotografia, Produção Gráfica",
    duration: "3 meses",
    gallery: [projectEditorial, projectEditorial, projectEditorial, projectEditorial],
  },
];
