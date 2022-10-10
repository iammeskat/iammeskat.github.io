import BtnSend from "./BtnSend";

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
      <BtnSend />
    </div>
  );
};

export default ContactForm;
