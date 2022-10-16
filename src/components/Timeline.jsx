import { useState } from "react";
import { timelineData } from "../data/timelineData";
import BtnSeeMore from "./BtnSeeMore";
import Headline from "./Headline";
import History from "./History";

const Timeline = () => {
  const [count, setCount] = useState(4);
  const getData = () => {
    if (timelineData.length > count) {
      return timelineData.slice(0, count);
    } else {
      return timelineData;
    }
  };
  const seeMore = () => {
    if (timelineData.length > count) {
      setCount(count + 2);
    }
  };
  return (
    <div className="content space-y-12 md:space-y-16">
      <Headline titlePart1="my" titlePart2="timeline" reverse={true} />

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {getData().map((item, indx) => {
            return (
              <History
                key={indx}
                time={item.time}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          {timelineData.length > count && (
            <BtnSeeMore onClickHandler={seeMore} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
