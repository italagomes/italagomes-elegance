import { useState } from "react";
import { galleryImages } from "@/data/projects";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentImage = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage)
    : null;

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
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                <span className="text-xs font-medium text-primary-foreground/80 mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-background/95 backdrop-blur">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-50"
          >
            <X className="h-6 w-6 text-foreground" />
            <span className="sr-only">Fechar</span>
          </button>
          
          {currentImage && (
            <div className="p-8">
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">{currentImage.category}</span>
                <h3 className="text-2xl font-bold text-foreground mt-2">{currentImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
