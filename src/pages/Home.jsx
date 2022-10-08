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

        <div className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[9rem] p-1.5 hover:w-[10rem] transition-all duration-300">
          <span className="pl-2">About Me</span>
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[crimson]"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
