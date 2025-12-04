import AboutImg from "../../assets/img/about/about-us.png";

import background from "../../assets/img/about/bg-about.png";

const DivContainer = `p-6 text-left rounded-[20px] bg-primary-2 shadow-[0_4px_6px_rgba(0,0,0,0.1)] xl:first:order-2 xl:last:order-3 lg:max-w-[600px]`;
const DivTitle = `text-neutral-0 font-bold text-[1.8rem] mb-1`;

import AboutCard from "../../components/ui/AboutCard.jsx";

function About() {
  return (
    <section
      className="xl:m-[4%] xl:justify-center  py-8 px-[4%] flex flex-col text-center bg-primary-1 min-h-[calc(100vh-96px)] shadow-[0_4px_6px_rgba(0,0,0,0.2)] rounded-4xl"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="relative lg:mb-2 inline-block mx-auto text-[2.5rem] uppercase font-bold text-neutral-0 leading-tight before:content-[''] before:block  before:w-[60px] before:h-1 before:bg-secondary-1 before:absolute before:left-0 before:bottom-0">
        Sobre nós
      </h2>

      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 xl:flex-row xl:items-center xl:gap-12">
        <img
          className="w-[clamp(300px, 5vw , 500px)] xl:order-1"
          src={AboutImg}
          alt="Sobre nós"
        />

        <div className="lg:flex flex flex-col lg:flex-col lg:items-center gap-6 xl:items-start">
          <AboutCard
            containerClass={DivContainer}
            titleClass={DivTitle}
            title="Nossa"
            highlight="História"
          >
            Desde o início, nossa paixão pelo café nos inspira a oferecer
            experiências únicas em cada xícara. Com{" "}
            <span className="text-secondary-1 font-medium">
              grãos selecionados
            </span>{" "}
            e preparo artesanal, buscamos unir qualidade, sabor e acolhimento em
            um só lugar. Aqui, cada detalhe é pensado para transformar o seu
            momento de café em algo especial.
          </AboutCard>
          <AboutCard
            containerClass={DivContainer}
            titleClass={DivTitle}
            title="Nosso"
            highlight="Propósito"
          >
            Inspirar momentos de conexão e bem-estar por meio do café.
            Acreditamos que cada xícara pode aproximar pessoas, despertar ideias
            e transformar rotinas.{" "}
            <span className="text-secondary-1 font-medium">
              Nosso compromisso
            </span>{" "}
            é oferecer qualidade, sustentabilidade e experiências que tornem o
            seu dia mais leve e especial.
          </AboutCard>
        </div>
      </div>
    </section>
  );
}

export default About;
