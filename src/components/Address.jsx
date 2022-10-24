import { personalData } from "../data/personalData";
import ContactCard from "./ContactCard";
import IconCall from "./icons/IconCall";
import IconEnvelop from "./icons/IconEnvelop";
import IconMap from "./icons/IconMap";
import SocialLinks from "./SocialLinks";

const Address = () => {
  const { address, emails, phones } = personalData;
  return (
    <div className="space-y-6">
      <p className="text-slate-600 dark:text-slate-400">
        If I can be of assistance, please do not hesitate to contact me. You can
        contact me by email, phone, or by filling out the contact form. I will
        get back to you soon.
      </p>

      <ContactCard
        title="Address"
        icon={<IconMap />}
        data={address}
        type="text"
      />
      <ContactCard
        title="Email"
        icon={<IconEnvelop />}
        data={emails}
        type="email"
      />
      <ContactCard
        title="Phone"
        icon={<IconCall />}
        data={phones}
        type="phone"
      />

      <SocialLinks />
    </div>
  );
};

export default Address;
