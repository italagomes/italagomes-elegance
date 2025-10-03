import profileImage from "@/assets/itala-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-20" />
              <img
                src={profileImage}
                alt="Itala Gomes"
                className="relative rounded-2xl shadow-elegant w-full max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Sou designer gráfica apaixonada por criar identidades visuais
                marcantes e projetos editoriais que contam histórias através do
                design.
              </p>
              <p>
                Com formação em Design Gráfico e anos de experiência no mercado,
                desenvolvi uma metodologia de trabalho que combina estratégia,
                criatividade e atenção aos detalhes.
              </p>
              <p>
                Meu processo criativo é baseado em escuta ativa, pesquisa
                aprofundada e desenvolvimento iterativo, sempre buscando entregar
                soluções que superem as expectativas dos clientes.
              </p>
              <p className="font-medium text-foreground">
                Especialidades: Branding, Identidade Visual, Design Editorial,
                Logos e Packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
