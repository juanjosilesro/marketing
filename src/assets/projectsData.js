import { PROJECT_IDS } from "../enums/ProjectEnum";
import { loadProjectImages } from "../utils/loadProjectImages";

export const projects = {
  [PROJECT_IDS.SAN_LORENZO]: {
    id: PROJECT_IDS.SAN_LORENZO,
    title: "San Lorenzo",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/san-lorenzo",
      6
    ),
  },

  [PROJECT_IDS.CIRUGIA_GENERAL]: {
    id: PROJECT_IDS.CIRUGIA_GENERAL,
    title: "Cirugía General",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/cirugia-general",
      3
    ),
  },

  [PROJECT_IDS.GINECOLOGIA]: {
    id: PROJECT_IDS.GINECOLOGIA,
    title: "Ginecología",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/ginecologia",
      4
    ),
  },

  [PROJECT_IDS.CAPACITACIONES]: {
    id: PROJECT_IDS.CAPACITACIONES,
    title: "Capacitaciones",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/capacitaciones",
      4
    ),
  },

  [PROJECT_IDS.CIRUGIA_LAPAROSCOPICA]: {
    id: PROJECT_IDS.CIRUGIA_LAPAROSCOPICA,
    title: "Cirugia Laparoscopica",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/cirugia-laparoscopica",
      6
    ),
  },

  [PROJECT_IDS.LABORATORIO]: {
    id: PROJECT_IDS.LABORATORIO,
    title: "Laboratorio",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/laboratorio",
      6
    ),
  },

  [PROJECT_IDS.ONCOLOGIA]: {
    id: PROJECT_IDS.ONCOLOGIA,
    title: "Oncologia",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/oncologia",
      5
    ),
  },

   [PROJECT_IDS.REPOSTERIA]: {
    id: PROJECT_IDS.REPOSTERIA,
    title: "Reposteria",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/reposteria",
      5
    ),
  },

    [PROJECT_IDS.UROLOGIA]: {
    id: PROJECT_IDS.UROLOGIA,
    title: "Urologia",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/urologia",
      5
    ),
  },

    [PROJECT_IDS.EMPREXITO]: {
    id: PROJECT_IDS.EMPREXITO,
    title: "Emprexito",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/emprexito",
      6
    ),
  },

    [PROJECT_IDS.OFTALMOLOGIA]: {
    id: PROJECT_IDS.OFTALMOLOGIA,
    title: "Oftalmologia",
    category: "Branding · Redes Sociales",
    description:
      "Desarrollo completo de identidad visual, lineamientos gráficos y piezas gráficas.",
    images: loadProjectImages(
      "../assets/projects/oftalmologia",
      7
    ),
  },
};
