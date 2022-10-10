import IconPaperfly from "./icons/IconPaperfly";

const BtnSend = () => {
  return (
    <button className="flex items-center justify-between space-x-1 primary-bg rounded-full w-[10.5rem] p-1.5 hover:w-[11rem] transition-all duration-300 group">
      <span className="pl-2">Send message</span>
      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white -rotate-45 group-hover:rotate-0 transition-all duration-300">
        <IconPaperfly />
      </div>
    </button>
  );
};

export default BtnSend;
