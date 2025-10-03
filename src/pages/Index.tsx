import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <Portfolio />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>

      <footer className="py-8 border-t border-border bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Itala Gomes — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
