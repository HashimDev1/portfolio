const Footer = () => {
  return (
    <footer className="bg-[#1F120B] px-6 py-10 text-center text-[#FFF8E7]">
      <h2 className="text-2xl font-black text-[#D4AF37]">
        Muhammad Hashim
      </h2>

      <p className="mt-3 text-[#FFF8E7]/70">
        Full Stack Developer | React | Node.js | MongoDB | Firebase | Flutter
      </p>

      <p className="mt-6 text-sm text-[#FFF8E7]/50">
        Â© {new Date().getFullYear()} Muhammad Hashim. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
