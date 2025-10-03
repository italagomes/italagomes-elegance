import { Palette, BookOpen, Sparkles, Package } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Identidade Visual",
    description:
      "Criação de marcas completas, desde o conceito até a aplicação em todos os pontos de contato.",
  },
  {
    icon: Sparkles,
    title: "Logos",
    description:
      "Desenvolvimento de logotipos únicos e memoráveis que representam a essência da marca.",
  },
  {
    icon: BookOpen,
    title: "Editorial",
    description:
      "Design de revistas, catálogos, livros e materiais editoriais com foco em legibilidade e estética.",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "Criação de embalagens que destacam produtos e fortalecem a identidade da marca.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções criativas e estratégicas para elevar sua marca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 shadow-soft hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-primary transition-smooth">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
