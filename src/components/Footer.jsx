const Footer = () => {
  return (
    <footer className="flex flex-col items-end bg-[#1a1a1a] p-2 text-gray-800m text-slate-400 text-xs">
      <p>© Copyright {new Date().getFullYear()}</p>
      <p>
        Design & developed by{" "}
        <span className="font-medium primary-color">Meskatul Islam</span>
      </p>
    </footer>
  );
};

export default Footer;
