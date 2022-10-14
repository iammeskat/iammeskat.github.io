import ContactCard from "./ContactCard";
import IconCall from "./icons/IconCall";
import IconEnvelop from "./icons/IconEnvelop";
import IconMap from "./icons/IconMap";
import SocialLinks from "./SocialLinks";

const Address = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-400">
        Feel free to contact me if you need anything else. You can contact me by
        email, phone, or contact form. I will get back to you soon.
      </p>

      <ContactCard
        title="Address"
        icon={<IconMap />}
        data="Shovandandi-4370, Patiya, Chattogram, Bangladesh"
        type="text"
      />
      <ContactCard
        title="Email"
        icon={<IconEnvelop />}
        data="meskatcse@gmail.com"
        type="email"
      />
      <ContactCard
        title="Phone"
        icon={<IconCall />}
        data="+880 1754-6587**"
        type="phone"
      />

      <SocialLinks />
    </div>
  );
};

export default Address;
