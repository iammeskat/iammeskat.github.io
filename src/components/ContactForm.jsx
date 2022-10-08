const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        className="w-full py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="text"
        name="name"
        id=""
        placeholder="Your name"
      />
      <input
        className="w-full py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="number"
        name="number"
        id=""
        placeholder="Your number"
      />
      <input
        className="w-full py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="email"
        name="email"
        id=""
        placeholder="Your email"
      />
      <input
        className="w-full py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="text"
        name="subject"
        id=""
        placeholder="Your subject"
      />

      <textarea
        className="py-3 px-4 w-full rounded-lg focus:outline-0 bg-[#1a1a1a] md:col-span-2"
        name="body"
        id=""
        rows="10"
        placeholder="Your message"
      ></textarea>
      <button className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[10.5rem] p-1.5 hover:w-[11rem] transition-all duration-300 group">
        <span className="pl-2">Send message</span>
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white -rotate-45 group-hover:rotate-0 transition-all duration-300">
          <img className="w-5 h-5" src="/images/paperfly.svg" alt="" />
        </div>
      </button>
    </div>
  );
};

export default ContactForm;
