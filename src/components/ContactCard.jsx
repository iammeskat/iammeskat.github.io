const ContactCard = (props) => {
  const { title, data, icon, type } = props;
  return (
    <div className="flex space-x-4">
      {/* <img className="w-10 h-10" src={`/images/${icon}`} alt="" /> */}
      {icon}

      <div className="space-y-2 max-w-[15rem]">
        <h2 className="font-bold text-2xl">{title}:</h2>
        {type === "email" ? (
          <a
            className="text-slate-600 dark:text-slate-400 hover:primary-color"
            href={`mailto:${data}`}
          >
            {data}
          </a>
        ) : type === "phone" ? (
          <a
            href={`tel:${data}`}
            className="text-slate-600 dark:text-slate-400 hover:primary-color"
          >
            {data}
          </a>
        ) : (
          <p className="text-slate-600 dark:text-slate-400">{data}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
