const PersonalInfo = () => {
  return (
    <div className="space-y-3 md:space-y-6">
      <h2 className="font-bold text-xl md:text-3xl uppercase">personal info</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Name:</span> Meskatul
                Islam
              </p>
            </td>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Freelance:</span>{" "}
                Available
              </p>
            </td>
          </tr>
          <tr>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Age:</span> 24
              </p>
            </td>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Skills:</span> Backend
                & Web Frontend
              </p>
            </td>
          </tr>
          <tr>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Email:</span>{" "}
                meskatcse@gmail.com
              </p>
            </td>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Experience:</span> 1
                Year
              </p>
            </td>
          </tr>
          <tr>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Address:</span>{" "}
                Chattogram, Bangladesh
              </p>
            </td>
            <td className="py-1.5 align-text-top">
              <p className="font-mediumm text-lg">
                <span className="font-thin text-gray-400">Language:</span>{" "}
                Bangla, English
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[10rem] p-1.5 hover:w-[11rem] transition-all duration-300">
        <span className="pl-2">Download CV</span>
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
  );
};

export default PersonalInfo;
