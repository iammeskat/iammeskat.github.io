import { timelineData } from "../data/timelineData";
import Headline from "./Headline";
import History from "./History";

const Timeline = () => {
  return (
    <div className="space-y-10">
      <Headline titlePart1="my" titlePart2="education" reverse={true} />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {timelineData.map((item, indx) => {
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
    </div>
  );
};

export default Timeline;
