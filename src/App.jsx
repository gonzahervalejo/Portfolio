import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import perfil from "./assets/img/perfil.jpeg";
import About from "./Components/About";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <section className="flex items-start justify-between p-10 max-w-screen-xl mx-auto px-10 mt-36">
        <div className="text-left max-w-lg">
          <h1 className="text-6xl font-bold text-white mb-2 ">Hola!</h1>
          <h2 className="text-5xl font-semibold text-white mb-5">
            Soy Gonzalo Hervalejo
          </h2>
          <h3 className="text-4xl text-lime-600 font-semibold mb-5">
            Desarrollador web
          </h3>
          <div className="flex items-center space-x-4 mb-5">
            <button className="bg-lime-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-800 transition">
              Descargar Currículum
            </button>
            <FaGithub className="text-white text-3xl hover:text-lime-600 transition" />
            <FaLinkedin className="text-white text-3xl hover:text-lime-600 transition" />
          </div>
        </div>
        <div>
          <img className="h-72 rounded-full" src={perfil} alt="foto-perfil" />
        </div>
      </section>

      <About />
    </>
  );
}

export default App;
