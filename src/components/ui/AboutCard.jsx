import PropTypes from "prop-types";


function AboutCard({ containerClass, titleClass, title, highlight, children }) {
  return (
    <div className={containerClass}>
      <h3 className={titleClass}>
        {title} <span className="text-secondary-1">{highlight}</span>
      </h3>

      <p className="text-neutral-0 text-[1rem]">
        {children}
      </p>
    </div>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  containerClass: PropTypes.string,
  titleClass: PropTypes.string,
};

export default AboutCard;
