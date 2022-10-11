import emailjs from "@emailjs/browser";
import { useState } from "react";
import BtnSend from "./BtnSend";

const ContactForm = () => {
  const [data, setData] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(0); //0=draft/null, 1=sending, 2=sent, 3=failed
  const serviceID = "service_3bhelth";
  const templateID = "template_temae8a";
  const publicKey = "g0xonKsyzP1q5yp7X";
  const templateParams = { ...data };

  const send = async () => {
    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      if (res.status === 200) {
        setData({
          subject: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus(2);
      } else {
        setStatus(3);
      }
    } catch (error) {
      setStatus(3);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(1);
    send();
  };
  const handleChange = (e) => {
    setStatus !== 0 && setStatus(0);
    let inputtedData = { ...data };
    inputtedData[e.target.name] = e.target.value;
    setData(inputtedData);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} action="#" method="post">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          onChange={(e) => handleChange(e)}
          className="input-field"
          type="text"
          name="name"
          value={data.name}
          placeholder="Your name"
          required
        />
        <input
          onChange={(e) => handleChange(e)}
          className="input-field"
          type="number"
          name="phone"
          value={data.phone}
          placeholder="Your number"
          required
        />
        <input
          onChange={(e) => handleChange(e)}
          className="input-field"
          type="email"
          name="email"
          value={data.email}
          placeholder="Your email"
          required
        />
        <input
          onChange={(e) => handleChange(e)}
          className="input-field"
          type="text"
          name="subject"
          value={data.subject}
          placeholder="Your subject"
          required
        />

        <textarea
          onChange={(e) => handleChange(e)}
          className="input-field md:col-span-2"
          name="message"
          value={data.message}
          rows="10"
          placeholder="Your message"
          required
        ></textarea>
        <BtnSend status={status} />
      </div>
    </form>
  );
};

export default ContactForm;
