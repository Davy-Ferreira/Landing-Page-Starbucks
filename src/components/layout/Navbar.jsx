import Button_Filled from "../ui/Button-filled";

import imagemLogo from "../../assets/img/logo-starbucks.png";
import { useState } from "react";

const linkClass = `
  text-neutral-8 
  font-medium 
  transition-all duration-300 ease-in-out
  border-b border-transparent
  hover:text-primary-1 hover:border-primary-1
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex justify-between items-center"
      role="navigation"
      aria-label="Menu principal"
    >
      <a href="#home" className="flex items-center">
        <img className="w-[180px]" src={imagemLogo} alt="Logo Starbucks" />
      </a>

      <button
        className="w-10 text-[1.2em] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir/fechar menu"
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
      >
        <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      <ul
        id="navbar-menu"
        className={`
          text-[1.1rem]
          w-full absolute top-20 left-0 p-4 bg-neutral-1
          flex-col gap-1 z-50
          ${isOpen ? "flex" : "hidden"}
          md:static md:flex md:flex-row md:gap-4 md:w-auto md:p-0
        `}
      >
        <li className="text-center">
          <a className={linkClass} href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li className="text-center">
          <a className={linkClass} href="#trending" onClick={() => setIsOpen(false)}>
            Em Alta
          </a>
        </li>
        <li className="text-center">
          <a className={linkClass} href="#about" onClick={() => setIsOpen(false)}>
            Sobre Nós
          </a>
        </li>
        <li className="text-center">
          <a className={linkClass} href="#products" onClick={() => setIsOpen(false)}>
            Novidades
          </a>
        </li>
      </ul>
        <Button_Filled adicionar=" hidden md:block" >Contatar</Button_Filled>
    </nav>
  );
}

export default Navbar;
