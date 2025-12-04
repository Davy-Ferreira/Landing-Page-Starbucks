import PropTypes from "prop-types";

const TwindCards = `relative`;
const TwindCardImg = `w-[clamp(300px,5vw,600px)]` ;
const TwindCardStar = `bg-neutral-0 absolute bottom-[70px] right-[30px] py-[5px] px-2.5 rounded-[5px]`;
const TwindCardDescription = `flex flex-col text-center text-[1.3rem] font-semibold text-neutral-8`;
const TwindCardDescriptionSubtatle = `text-[1rem] font-medium text-neutral-7`;

function CardsCoffe({ img, star, name, price }) {
  CardsCoffe.propTypes = {
    img: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };
  
  return (
    <div className={TwindCards} >
      <img className={TwindCardImg} src={img} alt="Starbucks Drinck"/>
      <div className={TwindCardStar}>
        <p>
          {star} <i className='fa-solid fa-star text-secondary-1' ></i>
        </p>
      </div>

      <p className={TwindCardDescription}>
        {name}
        <span className={TwindCardDescriptionSubtatle} >{price}</span>
      </p>
    </div>
  )
}

export default CardsCoffe
