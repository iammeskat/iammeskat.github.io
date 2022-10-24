import { personalData } from "../data/personalData";
import BtnDownload from "./BtnDownload";

const PersonalInfo = () => {
  const {
    name,
    age,
    emails,
    shortAddress,
    freelance,
    skills,
    yearOfExperience,
    languages,
  } = personalData;
  return (
    <div className="space-y-3 md:space-y-6">
      <h2 className="font-bold text-xl md:text-3xl uppercase">personal info</h2>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 md:font-medium text-lg">
        <ul className="space-y-2 md:space-y-4">
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Name:
            </span>{" "}
            {name}
          </li>
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Age:
            </span>{" "}
            {age}
          </li>
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Email:
            </span>{" "}
            <a
              className="hover:primary-text dark:hover:dark-primary-text"
              href={`mailto:${emails[0]}`}
            >
              {emails[0]}
            </a>
          </li>
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Address:
            </span>{" "}
            {shortAddress}
          </li>
        </ul>
        <ul className="space-y-2 md:space-y-4">
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Freelance:
            </span>{" "}
            {freelance}
          </li>
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Skills:
            </span>{" "}
            {skills}
          </li>
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Experience:
            </span>{" "}
            {yearOfExperience[0] + " Years"}
          </li>
          <li>
            <span className="font-thin text-slate-600 dark:text-slate-400">
              Language:
            </span>{" "}
            {languages}
          </li>
        </ul>
      </div>
      <BtnDownload />
    </div>
  );
};

export default PersonalInfo;
