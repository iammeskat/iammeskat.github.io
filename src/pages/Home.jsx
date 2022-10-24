import BtnAbout from "../components/BtnAbout";
import SocialLinks from "../components/SocialLinks";
import { personalData } from "../data/personalData";

const Home = () => {
  const { name, img, tagline, description } = personalData;
  return (
    <div id="home" className="home-parent">
      <div className="home">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="about">
          <h2 className="font-bold text-4xl md:text-6xl truncate">{name}</h2>
          <p className="text-center lg:text-left font-medium text-xl md:text-2xl primary-text dark:dark-primary-text">
            {tagline}
          </p>
          <p className="text-center w-full lg:max-w-[35rem] lg:text-left text-sm md:text-base">
            {description}
          </p>
          <SocialLinks />
          <BtnAbout />
        </div>
      </div>
    </div>
  );
};

export default Home;
