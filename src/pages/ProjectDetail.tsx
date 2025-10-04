import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Portfolio
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Título do Projeto */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {project.category}
            </p>
          </div>

          {/* Imagem Principal */}
          <div className="mb-12 animate-scale-in">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Descrição do Projeto */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Sobre o Projeto
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Grade de Imagens Adicionais */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Galeria do Projeto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video bg-muted rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Detalhes Adicionais */}
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Detalhes do Projeto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cliente</h3>
                <p>{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ano</h3>
                <p>{project.year}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Serviços</h3>
                <p>{project.services}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duração</h3>
                <p>{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-border bg-gradient-subtle mt-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Itala Gomes — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
