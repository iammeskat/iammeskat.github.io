import { track } from "mixpanel-browser";

const ContactCard = (props) => {
  const { title, data, icon, type } = props;
  const onTrack = (data) => {
    track("contact", data);
  };
  return (
    <div className="flex space-x-4">
      {icon}

      <div className="space-y-2 max-w-[15rem]">
        <h2 className="font-bold text-2xl">{title}:</h2>
        {type === "email" ? (
          <div className="flex flex-col">
            {data.map((item, indx) => {
              return (
                <a
                  key={indx}
                  onClick={() =>
                    onTrack({
                      type: "mail",
                      name: item,
                    })
                  }
                  className="text-slate-600 dark:text-slate-400 hover:primary-text dark:hover:dark-primary-text"
                  href={`mailto:${item}`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        ) : type === "phone" ? (
          <div className="flex flex-col">
            {data.map((item, indx) => {
              return (
                <a
                  key={indx}
                  onClick={() =>
                    onTrack({
                      type: "phone",
                      name: item,
                    })
                  }
                  className="text-slate-600 dark:text-slate-400 hover:primary-text dark:hover:dark-primary-text"
                  href={`tel:${item}`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        ) : (
          <p className="text-slate-600 dark:text-slate-400">{data}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
