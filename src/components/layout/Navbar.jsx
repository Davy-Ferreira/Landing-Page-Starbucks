import imagemLogo from "../../assets/img/logo-starbucks.png";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center">
      <img width={"180px"} src={imagemLogo} alt="Logo Starbucks" />

      <button className={`w-10  text-[1.2em]`} onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <ul className={` flex gap-1 flex-col w-full absolute top-20 bg-neutral-1 left-0 p-4 ${isOpen ? 'flex' : 'hidden'}`}>
        <li className="text-center">
          <a
            className="text-neutral-8 font-mediumtransition-all duration-300 ease-in-out
  hover:text-primary-1 hover:border-b border-primary-1"
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="text-center">
          <a
            className="text-neutral-8 font-mediumtransition-all duration-300 ease-in-out
  hover:text-primary-1 hover:border-b border-primary-1"
            href="#trending"
          >
            Em Alta
          </a>
        </li>
        <li className="text-center">
          <a
            className="text-neutral-8 font-mediumtransition-all duration-300 ease-in-out
  hover:text-primary-1 hover:border-b border-primary-1"
            href="#about"
          >
            Sobre Nós
          </a>
        </li>
        <li className="text-center">
          <a
            className="text-neutral-8 font-mediumtransition-all duration-300 ease-in-out
  hover:text-primary-1 hover:border-b border-primary-1"
            href="#products"
          >
            Novidades
          </a>
        </li>
      </ul>

      <a href="#" className="hidden">
        Contatar
      </a>
    </nav>
  );
}

export default Navbar;
