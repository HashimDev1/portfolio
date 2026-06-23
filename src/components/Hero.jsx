import { motion } from "framer-motion";
import { ArrowRight, Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const stats = [
    { number: "7+", label: "Projects Completed" },
    { number: "10+", label: "Technologies Mastered" },
    { number: "3.5+", label: "Years Learning" },
    { number: "100%", label: "Client Focused" },
  ];

  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/HashimDev1/",
      name: "GitHub",
      hoverClass: "hover:bg-[#2B1D14]",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/muhammad-hashim-82518b280/",
      name: "LinkedIn",
      hoverClass: "hover:bg-[#0A66C2]",
    },
    {
      icon: Mail,
      href: "mailto:hashim8611932@gmail.com",
      name: "Email",
      hoverClass: "hover:bg-[#C65D3A]"
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1F120B] via-[#3B2416] to-[#B9823A] px-6 pt-28 text-[#FFF8E7]"
    >
      <div className="absolute left-10 top-32 h-52 w-52 rounded-full bg-[#D4AF37]/20 blur-3xl" />
      <div className="absolute bottom-24 right-10 h-72 w-72 rounded-full bg-[#B9823A]/30 blur-3xl" />
      <div className="absolute left-1/2 top-24 h-32 w-32 rounded-full bg-[#FFF8E7]/10 blur-2xl" />

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[12%] top-[25%] h-4 w-4 rounded-full bg-[#D4AF37]"
      />

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-[32%] left-[8%] h-3 w-3 rounded-full bg-[#B68C2D]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden sm:flex justify-center lg:justify-start"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -inset-8 rounded-full bg-[#D4AF37]/30 blur-3xl"
            />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative h-48 w-48 overflow-hidden rounded-[42%_58%_65%_35%/45%_35%_65%_55%] border-4 border-[#D4AF37] bg-[#E8D8B8] shadow-2xl shadow-[#D4AF37]/30 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
            >
              <img
                src="/Hashim1.png"
                alt="Muhammad Hashim"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="mb-3 font-semibold tracking-[0.3em] text-[#D4AF37]">
            HELLO, I'M
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Muhammad <span className="text-[#D4AF37]">Hashim</span>
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-[#E8D8B8] md:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#FFF8E7]/80 md:text-lg">
            I build modern web and mobile applications using React, Node.js,
            Express, MongoDB, Firebase, and Flutter.
          </p>

          <div className="mt-7 flex justify-center gap-4 lg:justify-start">
            {socials.map((item) => {
              const Icon = item.icon;
              const isMail = item.href.startsWith("mailto:");

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={isMail ? "_self" : "_blank"}
                  rel={isMail ? undefined : "noreferrer"}
                  aria-label={item.name}
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className={`flex h-12 w-12 items-center justify-center rounded-full
                    border border-[#D4AF37]/40 bg-[#3B2416]/80 text-[#D4AF37]
                    shadow-[0_12px_30px_rgba(212,175,55,0.16)] backdrop-blur-md
                    transition-all duration-300
                    hover:shadow-[0_18px_45px_rgba(212,175,55,0.25)]
                    ${item.hoverClass}`}
                >
                  <Icon className="text-xl" />
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3 font-bold text-[#1F120B] shadow-xl shadow-[#D4AF37]/25 transition hover:-translate-y-1 hover:bg-[#B9823A]"
            >
              Hire Me <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37] px-8 py-3 font-bold text-[#D4AF37] transition hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#1F120B]"
            >
              Contact Me <Send size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 mx-auto mb-10 grid max-w-6xl gap-5 rounded-3xl border border-[#D4AF37]/20 bg-[#1F120B]/70 p-6 shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[#D4AF37]/20 bg-[#3B2416]/70 p-5 text-center transition hover:-translate-y-1 hover:border-[#D4AF37]"
          >
            <h3 className="text-4xl font-black text-[#D4AF37]">
              {stat.number}
            </h3>
            <p className="mt-2 text-sm text-[#FFF8E7]/75">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
