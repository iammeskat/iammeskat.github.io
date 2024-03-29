import { personalData } from "../data/personalData";

const BtnDownload = () => {
  return (
    <a
      href={personalData.cvLink}
      target="_blank"
      className="flex items-center justify-between space-x-1 primary-bg dark:dark-primary-bg rounded-full w-[10rem] p-1.5 hover:w-[11rem] transition-all duration-300"
      rel="noreferrer"
    >
      <span className="pl-2 text-slate-50">Download CV</span>
      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 primary-text dark:dark-primary-text animate-bounce -mb-0.5"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  );
};

export default BtnDownload;
