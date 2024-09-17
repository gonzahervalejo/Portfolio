import React from "react";
import {
  git,
  gitHub,
  html,
  css,
  js,
  react,
  sass,
  tailwind,
  ts,
  bitbucket,
  firebase,
  materialui,
  mongo,
  wordpress,
  mysql,
  node,
} from "../img";

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-10 mt-20">
      <div className="flex justify-between items-start p-4">
        <div className="w-1/2 pr-10">
          <h2 className="text-5xl font-semibold text-white mb-5">
            Sobre mí<span className="text-lime-600">.</span>
          </h2>
          <p className="max-w-3xl font-semibold text-white mb-10">
            Soy desarrollador web enfocado en crear soluciones modernas y
            funcionales. Principalmente trabajo como desarrollador frontend en
            React, siempre buscando mejorar y aprender nuevas herramientas.
          </p>

          <h2 className="text-3xl font-semibold text-white mb-5">
            Educación<span className="text-lime-600">.</span>
          </h2>
          <div className="mb-5">
            <p className="text-white font-semibold">
              <span className="text-lime-600">• </span>
              Desarrollo web frontend
            </p>
            <p className="text-gray-400">CoderHouse - 2022</p>
          </div>
          <div>
            <p className="text-white font-semibold">
              <span className="text-lime-600">• </span>
              Programación web full stack
            </p>
            <p className="text-gray-400">
              Universidad Tecnológica Nacional (UTN) - 2024
            </p>
          </div>
        </div>

        <div className="w-1/2">
          <h2 className="text-3xl font-semibold text-white mb-5 ml-5	">
            Tecnologías<span className="text-lime-600">.</span>
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <img className="h-12 mx-auto" src={git} alt="git" />
              <p className="text-white mt-2">Git</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={gitHub} alt="gitHub" />
              <p className="text-white mt-2">GitHub</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={html} alt="html" />
              <p className="text-white mt-2">HTML</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={css} alt="css" />
              <p className="text-white mt-2">CSS</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={js} alt="js" />
              <p className="text-white mt-2">JavaScript</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={react} alt="react" />
              <p className="text-white mt-2">React</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={node} alt="node" />
              <p className="text-white mt-2">Node.js</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={mongo} alt="mongo" />
              <p className="text-white mt-2">MongoDB</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={mysql} alt="mysql" />
              <p className="text-white mt-2">MySQL</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={ts} alt="ts" />
              <p className="text-white mt-2">TypeScript</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={tailwind} alt="tailwind" />
              <p className="text-white mt-2">TailwindCSS</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={sass} alt="sass" />
              <p className="text-white mt-2">Sass</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={bitbucket} alt="bitbucket" />
              <p className="text-white mt-2">Bitbucket</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={firebase} alt="firebase" />
              <p className="text-white mt-2">Firebase</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={materialui} alt="materialui" />
              <p className="text-white mt-2">Material UI</p>
            </div>
            <div className="text-center">
              <img className="h-12 mx-auto" src={wordpress} alt="wordpress" />
              <p className="text-white mt-2">WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
