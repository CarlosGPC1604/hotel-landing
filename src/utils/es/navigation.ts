
const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Habitaciones", url: "/es/habitaciones" },
  { name: "Servicios", url: "/es/servicios" },
  { name: "Blog", url: "/es/blog" },
  { name: "Contacto", url: "/es/contacto" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/es/documentacion/" },
      { name: "Herramientas y equipamientos", url: "/es/productos" },
      { name: "Servicios de construcción", url: "/es/servicios" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/es/blog" },
      { name: "Carreras", url: "#" },
      { name: "Clientes", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};