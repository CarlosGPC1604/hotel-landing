
const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Habitaciones", url: "#" },
  { name: "Servicios", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Contacto", url: "/es/contacto" },
];

const footerLinks = [
  {
    section: "Sobre nosotros",
    links: [
      { name: "Términos y condiciones de servicio", url: "#" },
      { name: "Nuestras habitaciones", url: "#" },
      { name: "Servicio de reservación", url: "#" },
      { name: "Métodos de pago", url: "#" },
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