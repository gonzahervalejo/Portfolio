import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black w-full p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-10">
        <h1 className="text-white text-3xl font-bold">GHDEV</h1>
        <ul className="flex space-x-8 text-white">
          <li>
            <a href="#inicio" className="hover:text-lime-600 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre-mi" className="hover:text-lime-600 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-lime-600 transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-lime-600 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
