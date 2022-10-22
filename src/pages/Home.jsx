import BtnAbout from "../components/BtnAbout";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <div id="home" className="home-parent">
      <div className="home">
        <div className="img">
          <img src="./images/me.png" alt="" />
        </div>
        <div className="about">
          <h2 className="font-bold text-4xl md:text-6xl truncate">
            Meskatul Islam
          </h2>
          <p className="text-center lg:text-left font-medium text-xl md:text-2xl primary-color">
            Software Engineer | Programmer
          </p>
          <p className="text-center w-full lg:max-w-[35rem] lg:text-left text-sm md:text-base">
            Hello, I’m a full stack web developer from Bangladesh. I have
            experience in web development, design, and customization. Also, I am
            good at database designing and software requirements analysis.
          </p>
          <SocialLinks />
          <BtnAbout />
        </div>
      </div>
    </div>
  );
};

export default Home;
