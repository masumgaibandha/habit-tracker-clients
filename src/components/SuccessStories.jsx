import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.35 },
  }),
};

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      quote:
        "I finally read every day for 30 days straight. The streak feature kept me coming back.",
    },
    {
      name: "David Kim",
      role: "Student",
      quote:
        "HabitFlow turned my messy routine into something I can actually follow. My study hours doubled.",
    },
    {
      name: "Ava Thompson",
      role: "Developer",
      quote:
        "Tiny habits like stretch breaks and water reminders made a huge difference in my energy.",
    },
  ];

  return (
    <section className="py-14 bg-base-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
            Stories from the community
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Habits that Actually <span className="text-[#6A75FF]">Stick</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Real people using HabitFlow to build calm, consistent routines in
            study, work, and life.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((person, idx) => (
            <motion.div
              key={person.name}
              className="bg-base-200 rounded-2xl p-5 h-full flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              variants={cardVariants}
            >
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                “{person.quote}”
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-sm">{person.name}</p>
                <p className="text-xs text-gray-500">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
