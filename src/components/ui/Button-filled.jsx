import PropTypes from "prop-types";

function Button_Filled ({ children,adicionar="" }) {
  return (
        <a
        href="#contato"
        className={`bg-primary-2  md:block text-neutral-0 hover:bg-primary-3 transition-all duration-300 ease-in-out px-5 cursor-pointer py-2.5 rounded-lg ${adicionar}`}
      >
        {children}
      </a>
  )
}

Button_Filled.propTypes = {
  children: PropTypes.string.isRequired,
  adicionar: PropTypes.string,
}
export default Button_Filled