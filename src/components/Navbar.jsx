import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, DownloadCloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#1F120B]/95 shadow-xl backdrop-blur-xl"
          : "bg-[#1F120B]/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-black text-[#D4AF37]">
          Hashim<span className="text-[#FFF8E7]">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#FFF8E7]/80 transition hover:text-[#D4AF37]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-[#D4AF37]/40 bg-[#3B2416] p-2 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#1F120B]"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/Muhammad-Hashim-CV.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-bold text-[#1F120B] transition hover:bg-[#B9823A]"
          >
            Download CV <DownloadCloud size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg bg-[#3B2416] p-2 text-[#D4AF37] lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="bg-[#1F120B] lg:hidden border-t border-[#D4AF37]/15">
          <div className="flex flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-1 text-[#FFF8E7] transition hover:text-[#D4AF37]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Muhammad-Hashim-CV.pdf"
              download
              className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-bold text-[#1F120B]"
            >
              Download CV <DownloadCloud size={16} />
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
