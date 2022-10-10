import BtnAbout from "../components/BtnAbout";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <div id="home" className="-mt-[52px] pt-[52px] border border-[#0d0d0d] ">
      <div className="w-full h-[calc(100vh-92px)] my-5 flex flex-col justify-center space-y-8 md:space-y-14 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8 p-4 bg-[#141313] rounded-2xl">
        <div className="lg:col-span-2 w-full flex justify-center items-center">
          <img
            className="max-h-[225px] max-w-[180] md:max-h-[450px] md:max-w-[360] lg:max-h-[675px]L lg:max-w-[540]L rounded-xl border-2 border-[#1a1a1a]"
            src="./images/me.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl md:text-6xl ">Meskatul Islam</h2>
          <p className="font-medium text-xl md:text-2xl primary-color">
            Software Engineer | Programmer
          </p>
          <p className="text-center lg:text-left">
            Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Amet Porro
            Facere Expedita Ab Atque A Consectetur Odit Vel Soluta Itaque.
          </p>
          <SocialLinks />
          <BtnAbout />
        </div>
      </div>
    </div>
  );
};

export default Home;
