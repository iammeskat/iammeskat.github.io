import BtnDownload from "./BtnDownload";

const PersonalInfo = () => {
  return (
    <div className="space-y-3 md:space-y-6">
      <h2 className="font-bold text-xl md:text-3xl uppercase">personal info</h2>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 md:font-medium text-lg">
        <ul className="space-y-2 md:space-y-4">
          <li>
            <span className="font-thin text-gray-400">Name:</span> Meskatul
            Islam
          </li>
          <li>
            <span className="font-thin text-gray-400">Age:</span> 24
          </li>
          <li>
            <span className="font-thin text-gray-400">Email:</span>{" "}
            meskatcse@gmail.com
          </li>
          <li>
            <span className="font-thin text-gray-400">Address:</span>{" "}
            Chattogram, Bangladesh
          </li>
        </ul>
        <ul className="space-y-2 md:space-y-4">
          <li>
            <span className="font-thin text-gray-400">Freelance:</span>{" "}
            Available
          </li>
          <li>
            <span className="font-thin text-gray-400">Skills:</span> Backend &
            Web Frontend
          </li>
          <li>
            <span className="font-thin text-gray-400">Experience:</span> 2 Years
          </li>
          <li>
            <span className="font-thin text-gray-400">Language:</span> Bangla &
            English
          </li>
        </ul>
      </div>
      <BtnDownload />
    </div>
  );
};

export default PersonalInfo;
