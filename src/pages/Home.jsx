import BtnAbout from "../components/BtnAbout";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <div id="home" className="home-parent">
      <div className="home">
        <div className="img">
          <img src="./images/me4.png" alt="" />
        </div>
        <div className="about">
          <h2 className="font-bold text-4xl md:text-6xl truncate">
            Meskatul Islam
          </h2>
          <p className="font-medium text-xl md:text-2xl primary-color">
            Software Engineer | Programmer
          </p>
          <p className="text-centerm w-full lg:max-w-[35rem] lg:text-left text-justify">
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
