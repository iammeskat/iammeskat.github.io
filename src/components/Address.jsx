import SocialLinks from "./SocialLinks";

const Address = () => {
  return (
    <div className="space-y-6">
      <p>
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quas Dolorem
        Sunt Sapiente Vel Minus Eaque Voluptate Fugit Corrupti Omnis Tempora?
      </p>
      <div className="flex space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-10 h-10 text-[crimson]"
        >
          <path
            fill-rule="evenodd"
            d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
            clip-rule="evenodd"
          />
        </svg>

        <div className="space-y-2 max-w-[15rem]">
          <h2 className="font-bold text-2xl">Address:</h2>
          <p className="text-gray-400">
            Shovandandi-4370, Patiya, Chattogram, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-[crimson]"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>

        <div className="space-y-2 max-w-[15rem]">
          <h2 className="font-bold text-2xl">Email:</h2>
          <p className="text-gray-400">meskatcse@gmail.com</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-[crimson]"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>

        <div className="space-y-2 max-w-[15rem]">
          <h2 className="font-bold text-2xl">Number:</h2>
          <p className="text-gray-400">+880 1754-6587**</p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Address;
