import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const WhyBuildHabits = () => {
  const benefits = [
    {
      title: "Better Focus",
      desc: "Reduce distractions and train your brain to show up for what matters most.",
      icon: "🎯",
    },
    {
      title: "Reduced Stress",
      desc: "Small, consistent actions create a calm daily rhythm instead of chaos.",
      icon: "🧘‍♀️",
    },
    {
      title: "Stronger Health",
      desc: "Turn movement, sleep, and nutrition into automatic routines, not willpower battles.",
      icon: "💪",
    },
    {
      title: "Long-Term Growth",
      desc: "Tiny habits compound over time into big results in career, study, and life.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-14 bg-base-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
            Why Build Habits?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Small <span className="text-[#6A75FF]">steps</span>, big change
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Habits turn goals into simple daily actions. Build systems that keep
            you moving, even on low-motivation days.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl bg-base-200 p-5 flex flex-col h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              variants={cardVariants}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuildHabits;
