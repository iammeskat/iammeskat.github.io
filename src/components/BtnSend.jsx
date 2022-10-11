import IconPaperfly from "./icons/IconPaperfly";

const BtnSend = (props) => {
  const status = props.status;
  return (
    <button
      type="submit"
      className={`flex items-center justify-between space-x-1 ${
        status !== 3
          ? "primary-bg w-[10.5rem] hover:w-[11rem]"
          : "bg-yellow-500 w-[11.5rem] hover:w-[12rem]"
      } rounded-full  p-1.5  transition-all duration-300 group`}
    >
      <span className={`pl-2 `}>
        {status === 0
          ? "Send Message"
          : status === 1
          ? "Sending..."
          : status === 2
          ? "Message sent"
          : "Failed! Try again"}
      </span>
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center bg-white  transition-all duration-300 ${
          status === 1 ? "animate-spin" : "group-hover:-rotate-45"
        }`}
      >
        <IconPaperfly />
      </div>
    </button>
  );
};

export default BtnSend;
