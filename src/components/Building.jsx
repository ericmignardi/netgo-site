import { FiArrowRight, FiSettings } from "react-icons/fi";
import bg from "../assets/buildingBackground.png";
import { motion } from "motion/react";

const Building = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-center bg-cover bg-no-repeat rounded-4xl bg-gray-200 m-4"
      id="building"
    >
      <div className="center sectionPadding flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl text-medium-blue"
          >
            <FiSettings />
          </motion.span>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="heroTitle text-dark-blue"
          >
            Choose the cloud <br /> solutions you need
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="heroSubtitle text-dark-blue/80 max-w-xl"
          >
            Our sales team can help you find the best mix of cloud solutions for
            your business needs.
          </motion.p>
          <div className="flex gap-2">
            <motion.button
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
              className="buttonGreen flex gap-2 items-center"
            >
              Get started <FiArrowRight />
            </motion.button>
            <motion.button
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="buttonWhite"
            >
              Try for free
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Building;
