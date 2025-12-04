import image from "../../assets/img/detail.png";

//Componentes
import Button_Outline from "../ui/Button-Outline";
import Button_Filled from "../ui/Button-filled";

function Home() {
  return (
    <section className="flex flex-col gap-3 items-center min-h-[calc(100vh-96px)] py-8 px-[4%] pt-[clamp(0px,5vw,32px)]">
      <img
        className="md:max-w-[67%] lg:max-w-[50%] xl:max-w-[27%] 2xl:max-w-[20%] w-[clamp(300px, 50% , 400px)] "
        src={image}
        alt="Starbucks Drink"
      />
      <h1
        className="
            text-neutral-8 text-center font-bold uppercase leading-[1.2]
            text-[clamp(2.4rem,5vw,3rem)]
            sm:whitespace-nowrap
        "
      >
        Mais que café, uma <span className="text-primary-1">experiência.</span>
      </h1>

      <p className="text-neutral-9 text-center text-[1rem] font-medium">
        Descubra cafés icônicos, sabores únicos e a energia perfeita para cada
        parte do seu dia.
      </p>
      <div className="flex gap-3 top-3">
        <Button_Filled adicionar="" >Conhecer</Button_Filled>
        <Button_Outline>Contatar</Button_Outline>
      </div>
    </section>
  );
}

export default Home;
