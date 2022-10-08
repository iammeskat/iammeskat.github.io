const ContactCard = (props) => {
  const { title, data, icon } = props;
  return (
    <div className="flex space-x-4">
      <img className="w-10 h-10" src={`/images/${icon}`} alt="" />

      <div className="space-y-2 max-w-[15rem]">
        <h2 className="font-bold text-2xl">{title}:</h2>
        <p className="text-gray-400">{data}</p>
      </div>
    </div>
  );
};

export default ContactCard;
