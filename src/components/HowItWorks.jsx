import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const stepVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.4 },
  }),
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Create your habit",
      desc: "Set a clear title, category, and reminder time that fits your day.",
      number: "01",
    },
    {
      title: "Track your streak",
      desc: "Mark your habit complete and watch your streak grow over time.",
      number: "02",
    },
    {
      title: "Review and adjust",
      desc: "Use your My Habits dashboard to remove, tweak, or upgrade routines.",
      number: "03",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-[#f5f7ff] to-[#e9f7ff]">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-center gap-8 mb-8"
        >
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
              How HabitFlow Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Build Routines in{" "}
              <span className="text-[#B500F9]">Three Simple Steps</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              HabitFlow keeps things simple so you can stay consistent. No
              complex dashboards, no overwhelm—just clear steps and daily wins.
            </p>
          </div>
          <div className="flex-1 flex justify-center absolute right-2">
            <div className="bg-base-100 rounded-2xl shadow-md p-4 w-full max-w-md">
              <p className="text-sm font-semibold mb-2">Today's Focus</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✔ Drink 8 glasses of water</li>
                <li>✔ 20 minutes of reading</li>
                <li>⏰ Evening reflection at 10:00 PM</li>
              </ul>
              <Link
                to="/addhabit"
                className="my-btn mt-4 w-full h-9 text-sm cursor-pointer flex items-center justify-center"
              >
                Start a new habit
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="bg-base-100 rounded-2xl shadow-sm p-5 h-full flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              variants={stepVariants}
            >
              <span className="text-xs font-semibold text-[#6A75FF] mb-1">
                {step.number}
              </span>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
