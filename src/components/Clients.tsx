const clients = [
  "Empresa Alpha",
  "Brand Beta",
  "Grupo Gamma",
  "Studio Delta",
  "Creative Epsilon",
  "Design Zeta",
  "Agency Eta",
  "Company Theta",
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Clientes & Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tenho orgulho de colaborar com marcas e empresas que valorizam o design de qualidade
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client}
              className="flex items-center justify-center p-6 rounded-lg bg-background border border-border hover:border-primary/50 shadow-soft hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-center font-medium text-foreground/80 hover:text-primary transition-smooth">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            E muitos outros clientes satisfeitos ao longo dos anos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
