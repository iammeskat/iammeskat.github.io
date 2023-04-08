import { useState } from "react";
import { skillsData } from "../data/skillsData";
import { track } from "../service/mixpanel";
import BtnSeeMore from "./BtnSeeMore";
import Filter from "./Filter";
import Headline from "./Headline";
import SkillCard from "./SkillCard";

const Skill = () => {
  const [data, setData] = useState(skillsData);
  const [filterType, setFilterType] = useState("all");
  const [count, setCount] = useState(10);
  const getFilteredData = (type) => {
    const filteredData =
      type !== "all"
        ? skillsData.filter((item) => {
            if (item.type === type) {
              return true;
            } else {
              return false;
            }
          })
        : skillsData;
    setData(filteredData);
    setFilterType(type);
  };
  const cats = [
    ...new Set(
      skillsData.map((item) => {
        return item.type;
      })
    ),
  ];

  const getData = () => {
    if (data.length > count) {
      return data.slice(0, count);
    } else {
      return data;
    }
  };
  const seeMore = () => {
    if (data.length > count) {
      setCount(count + 5);
    }
  };

  return (
    <div className="content">
      <Headline titlePart1="my" titlePart2="skills" reverse={true} />
      <div className="flex flex-col space-y-3">
        <Filter
          filterType={filterType}
          onClickHandler={getFilteredData}
          filterOptions={cats}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {getData().map((skill, indx) => {
            return (
              <SkillCard key={indx} title={skill.title} icon={skill.icon} />
            );
          })}
        </div>
        <div className="flex justify-center">
          {data.length > count && (
            <BtnSeeMore
              onClickHandler={() => {
                seeMore();
                track({
                  type: "skill-button",
                  name: "see more",
                  url: "",
                });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
