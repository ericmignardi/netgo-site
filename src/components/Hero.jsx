import { FiArrowRight } from "react-icons/fi";
import hero from "../assets/hero.svg";
import bg from "../assets/heroBackground.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-fit bg-center bg-cover bg-no-repeat rounded-4xl m-4 mt-22"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="center sectionPadding flex flex-col justify-between items-center gap-16 bg-center bg-cover bg-no-repeat"
      >
        <div className="flex flex-col items-center text-center gap-4">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white bg-white/10 text-sm uppercase rounded-full p-2"
          >
            AI Solution
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="heroTitle"
          >
            Future cloud computing <br /> starts right here
          </motion.h1>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="heroSubtitle"
          >
            Powerful and production-ready, our cloud platform has the solutions
            you need to succeed.
          </motion.p>
          <div className="flex gap-2">
            <motion.button
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
              className="buttonGreen flex items-center gap-2"
            >
              Get started <FiArrowRight />
            </motion.button>
            <motion.button
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="buttonBlue"
            >
              Try for free
            </motion.button>
          </div>
        </div>
        <div>
          <motion.img
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.25 }}
            src={hero}
            alt="Hero section image"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
