const ContactCard = (props) => {
  const { title, data, icon, type } = props;
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
                  className="text-slate-600 dark:text-slate-400 hover:primary-color"
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
                  className="text-slate-600 dark:text-slate-400 hover:primary-color"
                  href={`tel:${data}`}
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
