import security from "../assets/security.svg";
import { motion } from "motion/react";

const Security = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="center sectionPadding grid grid-cols-1 sm:grid-cols-2 gap-8"
      id="security"
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start gap-4">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionBadge"
          >
            Security
          </motion.span>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionTitle"
          >
            AI Cybersecurity <br /> built to protect your data
          </motion.h2>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="sectionSubtitle"
          >
            Equip your organization with the tools and intelligence to
            anticipate threats, manage vulnerabilities, and protect your cloud,
            endpoint, and identity.
          </motion.p>
          <motion.button
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
            className="buttonGreen"
          >
            Explore more
          </motion.button>
        </div>
      </div>
      <div className="rounded-4xl bg-light-green/50 p-8 flex items-center justify-center w-full">
        <motion.img
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.25 }}
          className="w-full h-auto object-contain"
          src={security}
          alt="Security section image"
        />
      </div>
    </motion.section>
  );
};

export default Security;
