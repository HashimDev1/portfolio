import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    image: "/skills/html.png",
    accent: "from-[#D4AF37]/25 to-[#B9823A]/10",
  },
  {
    name: "CSS",
    image: "/skills/css.png",
    accent: "from-[#B9823A]/25 to-[#3B2416]/10",
  },
  {
    name: "JavaScript",
    image: "/skills/javascript.png",
    accent: "from-[#D4AF37]/30 to-[#B68C2D]/10",
  },
  {
    name: "React",
    image: "/skills/react.png",
    accent: "from-[#E8D8B8]/35 to-[#B9823A]/10",
  },
  {
    name: "Node.js",
    image: "/skills/nodejs.png",
    accent: "from-[#B68C2D]/25 to-[#3B2416]/10",
  },
  {
    name: "Express.js",
    image: "/skills/express.png",
    accent: "from-[#FFF8E7]/25 to-[#B9823A]/10",
  },
  {
    name: "MongoDB",
    image: "/skills/mongodb.png",
    accent: "from-[#D4AF37]/20 to-[#1F120B]/10",
  },
  {
    name: "Firebase",
    image: "/skills/firebase.png",
    accent: "from-[#D4AF37]/30 to-[#B9823A]/10",
  },
  {
    name: "Flutter",
    image: "/skills/flutter.png",
    accent: "from-[#E8D8B8]/35 to-[#3B2416]/10",
  },
  {
    name: "GitHub",
    image: "/skills/github.png",
    accent: "from-[#3B2416]/20 to-[#D4AF37]/10",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-[#FFF8E7]"
    >
      <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="absolute bottom-16 right-10 h-72 w-72 rounded-full bg-[#B9823A]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-bold tracking-[0.25em] text-[#B9823A]">SKILLS</p>

          <h2 className="mt-3 text-4xl font-black text-[#1F120B] md:text-5xl">
            My <span className="text-[#D4AF37]">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#3B2416]/80">
            Technologies I use to build modern web and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative min-h-[210px] overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-[#F7EFD8] p-4 text-center shadow-xl transition hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-70 transition group-hover:opacity-100`}
              />

              <div className="relative flex h-full flex-col items-center justify-between">
                <div className="flex h-[145px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#FFF8E7]/80 shadow-inner">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-[#1F120B]">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
