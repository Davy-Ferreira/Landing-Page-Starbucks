import PropTypes from "prop-types";

function Button_Outline ({ children}) {
  return (
         <a
          className="bg-transparent  rounded-lg  text-center border cursor-pointer transition-all duration-300 px-5 py-2.5  aease-in-out border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-neutral-0"
          href="#"
        >
          {children}
        </a>
  )
}
Button_Outline.propTypes = {
  children: PropTypes.string.isRequired,
}
 
export default Button_Outline
