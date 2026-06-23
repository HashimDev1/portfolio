import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#F7EFD8]">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"
      >
        <div>
          <p className="font-bold tracking-[0.25em] text-[#B9823A]">ABOUT ME</p>
          <h2 className="mt-3 text-4xl font-black text-[#1F120B] md:text-5xl">
            I create elegant digital experiences.
          </h2>
        </div>

        <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#FFF8E7] p-8 shadow-xl">
          <p className="text-lg leading-8 text-[#3B2416]">
            I am Muhammad Hashim, a Full Stack Developer focused on building
            modern, responsive, and practical web and mobile applications. My
            work combines clean UI design, strong backend structure, database
            integration, and smooth user experience.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#3B2416]">
            I enjoy working with React, Node.js, Express, MongoDB, Firebase, and
            Flutter to build complete applications from frontend to backend.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
