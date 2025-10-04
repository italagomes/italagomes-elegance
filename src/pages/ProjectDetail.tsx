import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();

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
              Nome do Projeto #{id}
            </h1>
            <p className="text-lg text-muted-foreground">
              Categoria do Projeto
            </p>
          </div>

          {/* Imagem Principal Placeholder */}
          <div className="mb-12 animate-scale-in">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="text-6xl mb-2">🖼️</div>
                  <p>Imagem Principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição do Projeto */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Sobre o Projeto
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Grade de Imagens Adicionais */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Galeria do Projeto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="aspect-video bg-muted rounded-lg overflow-hidden"
                >
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🖼️</div>
                      <p>Imagem {index}</p>
                    </div>
                  </div>
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
                <p>Nome do Cliente</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ano</h3>
                <p>2024</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Serviços</h3>
                <p>Branding, Design Gráfico, Editorial</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duração</h3>
                <p>3 meses</p>
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
