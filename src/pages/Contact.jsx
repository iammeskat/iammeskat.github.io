import Address from "../components/Address";
import ContactForm from "../components/ContactForm";
import Headline from "../components/Headline";

const Contact = () => {
  return (
    <section id="contact" className="py-10 space-y-16">
      <Headline titlePart1="contact" titlePart2="me" />

      <div className="space-y-6">
        <h2 className="font-bold text-3xl uppercase">get in touch</h2>
        <div className="grid grid-cols-3 gap-8">
          <Address />
          <div className="col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
