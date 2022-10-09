import Address from "../components/Address";
import ContactForm from "../components/ContactForm";
import Headline from "../components/Headline";

const Contact = () => {
  return (
    <section id="contact">
      <div className="content">
        <Headline titlePart1="contact" titlePart2="me" />
        <div className="space-y-4 md:space-y-6">
          <h2 className="font-bold text-xl md:text-3xl uppercase">
            get in touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Address />
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
