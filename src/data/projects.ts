import galleryFairy from "@/assets/gallery-fairy.jpg";
import galleryNestle from "@/assets/gallery-nestle.jpg";
import galleryPaint from "@/assets/gallery-paint.jpg";
import galleryPascoa1 from "@/assets/gallery-pascoa1.png";
import galleryPascoa2 from "@/assets/gallery-pascoa2.png";
import galleryChipKidd from "@/assets/gallery-chipkidd.png";
import galleryRockDay from "@/assets/gallery-rockday.png";

export interface GalleryImage {
  id: number;
  image: string;
  title: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: galleryFairy,
    title: "Fairy Charm - Coloring Book",
    category: "Editorial",
  },
  {
    id: 2,
    image: galleryNestle,
    title: "Nestlé Alpino Premium",
    category: "Packaging",
  },
  {
    id: 3,
    image: galleryPaint,
    title: "Paint it Your Way",
    category: "Editorial",
  },
  {
    id: 4,
    image: galleryPascoa1,
    title: "Páscoa para Todos - Curso",
    category: "Social Media",
  },
  {
    id: 5,
    image: galleryPascoa2,
    title: "Páscoa para Todos - Inscrições",
    category: "Social Media",
  },
  {
    id: 6,
    image: galleryChipKidd,
    title: "Chip Kidd - Design de Capa",
    category: "Editorial",
  },
  {
    id: 7,
    image: galleryRockDay,
    title: "Rock Day - Evento",
    category: "Social Media",
  },
];
