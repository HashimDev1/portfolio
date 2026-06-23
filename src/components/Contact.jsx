import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[#FFF8E7]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-bold tracking-[0.25em] text-[#B9823A]">CONTACT</p>
          <h2 className="mt-3 text-4xl font-black text-[#1F120B] md:text-5xl">
            Let's build something premium.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-[#3B2416]/85">
            Have a project idea, semester project, portfolio, backend system, or
            mobile app? Contact me and we can discuss how to build it properly.
          </p>

          <div className="mt-8 space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl bg-[#F7EFD8] p-5 shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B2416] text-[#D4AF37]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="font-bold text-[#1F120B]">{item.label}</p>
                    <p className="text-[#3B2416]/80">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#D4AF37]/25 bg-[#F7EFD8] p-8 shadow-xl"
        >
          <div className="grid gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-2xl border border-[#D4AF37]/30 bg-[#FFF8E7] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-2xl border border-[#D4AF37]/30 bg-[#FFF8E7] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="rounded-2xl border border-[#D4AF37]/30 bg-[#FFF8E7] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="resize-none rounded-2xl border border-[#D4AF37]/30 bg-[#FFF8E7] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            />

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B2416] px-8 py-4 font-bold text-[#D4AF37] shadow-lg transition hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#1F120B]"
            >
              Send Message <Send size={18} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
