import { motion } from "framer-motion";
import { services } from "../data/portfolioData";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-[#F7EFD8]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold tracking-[0.25em] text-[#B9823A]">SERVICES</p>
          <h2 className="mt-3 text-4xl font-black text-[#1F120B] md:text-5xl">
            What I Can Build
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-[#D4AF37]/25 bg-[#FFF8E7] p-8 shadow-xl transition hover:border-[#D4AF37]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3B2416] text-[#D4AF37] shadow-lg">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-black text-[#1F120B]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#3B2416]/85">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
