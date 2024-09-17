import React from "react";

const Projects = () => {
  const proyectos = [
    {
      nombre: "React-cart",
      descripcion: "Carrito de compras en React.",
      imagen: "./src/assets/img/react-cart.png",
      github: "https://github.com/gonzahervalejo/cart-react",
      demo: "https://react-coder-iota.vercel.app/",
      tecnologias: ["React", "CSS", "Firebase"],
    },
    {
      nombre: "WhatsApp",
      descripcion: "App de mensajeria",
      imagen: "ruta-imagen-proyecto-2.jpg",
      github: "https://github.com/gonzahervalejo/WhatsApp",
      demo: "https://whats-app-delta.vercel.app/",
      tecnologias: ["React", "CSS"],
    },
    {
      nombre: "JS-Cart",
      descripcion: "Carrito de compras en JavaScript",
      imagen: "./src/assets/img/js-cart.png",
      github: "https://github.com/gonzahervalejo/cart-javaScript",
      demo: "https://cart-java-script.vercel.app/",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      nombre: "To Do List",
      descripcion: "App de recordatorios",
      imagen: "ruta-imagen-proyecto-2.jpg",
      github: "https://github.com/gonzahervalejo/To-Do-React",
      demo: "https://to-do-react-lemon-sigma.vercel.app/",
      tecnologias: ["React", "CSS"],
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-10 mt-20">
      <h2 className="text-5xl font-semibold text-white mb-10">
        Proyectos<span className="text-lime-600">.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              className="h-40 w-full object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {proyecto.nombre}
            </h3>
            <p className="text-gray-400 mb-4">{proyecto.descripcion}</p>
            <div className="flex space-x-4 mb-4">
              <a
                href={proyecto.github}
                className="text-lime-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={proyecto.demo}
                className="text-lime-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo
              </a>
            </div>
            <div className="flex space-x-2">
              {proyecto.tecnologias.map((tec, idx) => (
                <span
                  key={idx}
                  className="bg-lime-600 text-white px-2 py-1 rounded-lg text-sm"
                >
                  {tec}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
