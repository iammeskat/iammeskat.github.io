import Headline from "../components/Headline";
import History from "../components/History";

const About = () => {
  return (
    <section id="about" className="py-10 space-y-16">
      <Headline titlePart1="about" titlePart2="me" reverse={false} />

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="font-bold text-3xl uppercase">personal info</h2>
          <table className="w-full">
            <tr>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Name:</span>{" "}
                  Meskatul Islam
                </p>
              </td>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Freelance:</span>{" "}
                  Available
                </p>
              </td>
            </tr>
            <tr>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Age:</span> 24
                </p>
              </td>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Skills:</span>{" "}
                  Backend & Web Frontend
                </p>
              </td>
            </tr>
            <tr>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Email:</span>{" "}
                  meskatcse@gmail.com
                </p>
              </td>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Experience:</span> 1
                  Year
                </p>
              </td>
            </tr>
            <tr>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Address:</span>{" "}
                  Chattogram, Bangladesh
                </p>
              </td>
              <td className="py-1.5">
                <p className="font-mediumm text-lg">
                  <span className="font-thin text-gray-400">Language:</span>{" "}
                  Bangla, English
                </p>
              </td>
            </tr>
          </table>
          <div className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[10rem] p-1.5 hover:w-[11rem] transition-all duration-300">
            <span className="pl-2">Download CV</span>
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-[crimson]"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1a1a1a] rounded h-40 p-6 flex flex-col justify-center space-y-2">
            <h2 className="font-bold text-5xl text-[crimson]">2+</h2>
            <p className="text-slate-400">Years Of Experience</p>
          </div>
          <div className="bg-[#1a1a1a] rounded h-40 p-6 flex flex-col justify-center space-y-2">
            <h2 className="font-bold text-5xl text-[crimson]">450+</h2>
            <p className="text-slate-400">Happy Clients</p>
          </div>
          <div className="bg-[#1a1a1a] rounded h-40 p-6 flex flex-col justify-center space-y-2">
            <h2 className="font-bold text-5xl text-[crimson]">390+</h2>
            <p className="text-slate-400">Project Done</p>
          </div>
          <div className="bg-[#1a1a1a] rounded h-40 p-6 flex flex-col justify-center space-y-2">
            <h2 className="font-bold text-5xl text-[crimson]">10+</h2>
            <p className="text-slate-400">Awards Won</p>
          </div>
        </div>
      </div>

      <Headline titlePart1="my" titlePart2="skills" reverse={true} />

      <div className="grid grid-cols-5 gap-4">
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/laravel.svg" alt="" />
          <h2>LARAVEL</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/react.svg" alt="" />
          <h2>REACT.JS</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/nodejs.svg" alt="" />
          <h2>NODE.JS</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <div className="h-20 flex items-center">
            <img
              className="max-h-[5rem] bg-white"
              src="./images/Expressjs.png"
              alt=""
            />
          </div>

          <h2>EXPRESS.JS</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/tailwindcss.svg" alt="" />

          <h2>TAILWIND CSS</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/bootstrap.svg" alt="" />

          <h2>BOOTSTRAP</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/php.svg" alt="" />
          <h2>PHP</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/js.png" alt="" />
          <h2>JAVASCRIPT</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/html.svg" alt="" />
          <h2>HTML</h2>
        </div>
        <div className="flex flex-col justify-center items-center h-44 space-y-2 bg-[#1a1a1a] hover:bg-white hover:text-black transition-all duration-300 rounded-md shadow-lg p-4">
          <img className="h-20 w-auto" src="./images/css.svg" alt="" />
          <h2>CSS</h2>
        </div>
      </div>

      <Headline titlePart1="my" titlePart2="education" reverse={true} />

      <div className="grid grid-cols-2">
        <History
          time="2017"
          title="Higher Secodary School Certificate (HSC)"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia
            Explicabo Magni Est Quo Vitae Quis Veritatis Fugiat Optio Placeat
            Enim!"
        />
        <History
          time="2015-2016"
          title="Frontend Developer"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia
            Explicabo Magni Est Quo Vitae Quis Veritatis Fugiat Optio Placeat
            Enim!"
        />
        <History
          time="2017"
          title="Higher Secodary School Certificate (HSC)"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia
            Explicabo Magni Est Quo Vitae Quis Veritatis Fugiat Optio Placeat
            Enim!"
        />
        <History
          time="2015-2016"
          title="Frontend Developer"
          description="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia
            Explicabo Magni Est Quo Vitae Quis Veritatis Fugiat Optio Placeat
            Enim!"
        />
      </div>
    </section>
  );
};

export default About;
