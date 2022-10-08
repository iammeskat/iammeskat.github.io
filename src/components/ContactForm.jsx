const ContactForm = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <input
        className="py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="text"
        name="name"
        id=""
        placeholder="Your name"
      />
      <input
        className="py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="number"
        name="number"
        id=""
        placeholder="Your number"
      />
      <input
        className="py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="email"
        name="email"
        id=""
        placeholder="Your email"
      />
      <input
        className="py-3 px-4 rounded-full focus:outline-0 bg-[#1a1a1a]"
        type="text"
        name="subject"
        id=""
        placeholder="Your subject"
      />

      <textarea
        className="py-3 px-4 w-full rounded-lg focus:outline-0 bg-[#1a1a1a] col-span-2"
        name="body"
        id=""
        rows="10"
        placeholder="Your message"
      ></textarea>
      <button className="flex items-center justify-between space-x-1 bg-[crimson] rounded-full w-[10.5rem] p-1.5 hover:w-[11rem] transition-all duration-300 group">
        <span className="pl-2">Send message</span>
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white -rotate-45 group-hover:rotate-0 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-[crimson]"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ContactForm;
