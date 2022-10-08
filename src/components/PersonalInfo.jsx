import BtnDownload from "./BtnDownload";

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
      <BtnDownload />
    </div>
  );
};

export default PersonalInfo;
