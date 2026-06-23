import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "BS Computer Science",
    place: "COMSATS University",
    time: "2023 - Present",
    description:
      "Studying software engineering, web development, mobile app development, databases, algorithms, and modern programming concepts.",
  },
  {
    icon: Briefcase,
    title: "Full Stack Developer",
    place: "Personal & Semester Projects",
    time: "2024 - Present",
    description:
      "Building full-stack web applications using React, Node.js, Express, MongoDB, Firebase, and Tailwind CSS.",
  },
  {
    icon: Code2,
    title: "Mobile App Development",
    place: "Flutter & Firebase Projects",
    time: "2025 - Present",
    description:
      "Creating responsive mobile applications with Flutter, Firebase authentication, Firestore, and clean UI flows.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-[#F7EFD8]"
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
          <p className="font-bold tracking-[0.25em] text-[#B9823A]">
            EXPERIENCE
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#1F120B] md:text-5xl">
            Education & <span className="text-[#D4AF37]">Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#3B2416]/80">
            My learning path, project experience, and development journey.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -45 : 45,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-[#FFF8E7] p-7 shadow-xl transition hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#B9823A] to-[#3B2416]" />

                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#3B2416] text-[#D4AF37] shadow-lg">
                    <Icon size={30} />
                  </div>

                  <div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-black text-[#1F120B]">
                        {item.title}
                      </h3>

                      <span className="w-fit rounded-full border border-[#D4AF37]/30 bg-[#F7EFD8] px-4 py-1 text-sm font-bold text-[#B9823A]">
                        {item.time}
                      </span>
                    </div>

                    <p className="mt-2 font-bold text-[#B9823A]">
                      {item.place}
                    </p>

                    <p className="mt-4 leading-7 text-[#3B2416]/85">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
