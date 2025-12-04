import Produto1 from '../../assets/img/trending/card1.png'
import Produto2 from '../../assets/img/trending/card2.png'
import Produto3 from '../../assets/img/trending/card3.png'

// Componentes
import CardsCoffe from '../ui/Cards-Coffe.jsx'

function Trending() {
  return (
    <section className="py-8 px-[4%] flex flex-col items-center gap-8 min-h-[calc(100vh-96px)]">
        <h2
        className="relative text-[2.5rem] uppercase font-bold text-neutral-8 before:content-[''] before:block before:w-[60px] before:h-1
            before:bg-primary-1 before:absolute before:bottom-0">
            Em alta
        </h2>

        <div className='md:flex md:justify-center md:flex-wrap md:gap-10 md:w-full' >
            {/* Card 1 */}
            <CardsCoffe
                img={Produto1}
                star={5}
                name="Fraputino"
                price="Avelã"
            />

            {/* Card 2 */}
            <CardsCoffe
                img={Produto2}
                star={5}
                name="Fraputino"
                price="Pistache"
            />

            {/* Card 3 */}
            <CardsCoffe
                img={Produto3}
                star={5}
                name="Fraputino"
                price="Morango"
            />
        </div>
    </section>
  )
}

export default Trending