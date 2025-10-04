import { Link } from "react-router-dom";
import projectEditorial from "@/assets/project-editorial.jpg";
import projectLogos from "@/assets/project-logos.jpg";
import projectBranding from "@/assets/project-branding.jpg";
import projectPackaging from "@/assets/project-packaging.jpg";

const projects = [
  {
    id: 1,
    title: "Revista Editorial",
    category: "Editorial",
    image: projectEditorial,
  },
  {
    id: 2,
    title: "Identidades Visuais",
    category: "Logos",
    image: projectLogos,
  },
  {
    id: 3,
    title: "Branding Completo",
    category: "Branding",
    image: projectBranding,
  },
  {
    id: 4,
    title: "Design de Embalagem",
    category: "Packaging",
    image: projectPackaging,
  },
  {
    id: 5,
    title: "Identidade Corporativa",
    category: "Branding",
    image: projectBranding,
  },
  {
    id: 6,
    title: "Catálogo Premium",
    category: "Editorial",
    image: projectEditorial,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira uma seleção dos projetos mais recentes e relevantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projeto/${project.id}`}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth animate-scale-in cursor-pointer block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                <span className="text-xs font-medium text-primary-foreground/80 mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
