import { motion } from "motion/react";

const Statistics = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="center sectionPadding flex flex-col md:flex-row justify-between items-center text-center"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-center items-center gap-4 p-8"
      >
        <span className="text-5xl font-semibold">2M+</span>
        <p>Customers buidling with No Worries</p>
      </motion.div>
      <motion.div
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-center items-center gap-4 p-8"
      >
        <span className="text-5xl font-semibold">98%</span>
        <p>Uptime SLA Volumes block storage</p>
      </motion.div>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-center items-center gap-4 p-8"
      >
        <span className="text-5xl font-semibold">24/5</span>
        <p>Global support coverage</p>
      </motion.div>
    </motion.section>
  );
};

export default Statistics;
