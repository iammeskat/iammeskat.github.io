import BtnAbout from "../components/BtnAbout";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 py-10 w-full"
    >
      <div className="lg:col-span-2 w-full flex justify-center">
        <img
          className="max-h-[225px] max-w-[180] md:max-h-[450px] md:max-w-[360] rounded-xl border-2 border-[#1a1a1a]"
          src="./images/me.jpg"
          alt=""
        />
      </div>
      <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start space-y-4">
        <h2 className="font-bold text-3xl md:text-6xl ">Meskatul Islam</h2>
        <p className="font-medium text-xl md:text-2xl text-red-500">
          Software Engineer | Programmer
        </p>
        <p className="text-center lg:text-left">
          Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Amet Porro
          Facere Expedita Ab Atque A Consectetur Odit Vel Soluta Itaque.
        </p>

        <BtnAbout />
      </div>
    </section>
  );
};

export default Home;
