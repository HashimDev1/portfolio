import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-[#1F120B] text-[#FFF8E7]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold tracking-[0.25em] text-[#D4AF37]">
            PORTFOLIO
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl border border-[#D4AF37]/25 bg-[#3B2416] p-8 shadow-2xl transition hover:border-[#D4AF37]"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-black text-[#D4AF37]">
                  {project.title}
                </h3>

                <span className="rounded-full bg-[#D4AF37] p-3 text-[#1F120B] transition group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <p className="leading-7 text-[#FFF8E7]/75">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D4AF37]/30 bg-[#1F120B] px-4 py-2 text-sm text-[#E8D8B8]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
