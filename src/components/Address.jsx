import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";

const Address = () => {
  return (
    <div className="space-y-6">
      <p>
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quas Dolorem
        Sunt Sapiente Vel Minus Eaque Voluptate Fugit Corrupti Omnis Tempora?
      </p>
      <ContactCard
        title="Address"
        icon="map.svg"
        data="Shovandandi-4370, Patiya, Chattogram, Bangladesh"
      />
      <ContactCard
        title="Email"
        icon="envelop.svg"
        data="meskatcse@gmail.com"
      />
      <ContactCard title="Phone" icon="call.svg" data="+880 1754-6587**" />

      <SocialLinks />
    </div>
  );
};

export default Address;
