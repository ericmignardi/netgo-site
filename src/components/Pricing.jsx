import PricingCard from "./PricingCard";
import {
  AiFillFacebook,
  AiFillApple,
  AiFillGoogleSquare,
} from "react-icons/ai";
import { motion } from "motion/react";

const Pricing = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-100 rounded-4xl m-4"
      id="pricing"
    >
      <div className="center sectionPadding flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionBadge"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionTitle"
          >
            Choose the cloud <br /> solutions you need
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="sectionSubtitle max-w-xl"
          >
            Our sales team can help you find the best mix of cloud solutions for
            your business needs.
          </motion.p>
        </div>
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* PricingCard(s) */}
          <PricingCard
            text={"text-white"}
            background={"bg-medium-blue"}
            price={"12"}
            title={"Simple, managed Kubernetes"}
            benefitOne={"Simple, managed Kubernetes built for scale."}
            benefitTwo={
              "Free control plane, free bandwidth allowance, and more."
            }
            benefitThree={"Automate & optimize to peak performance."}
            offset={-20}
            delay={0.25}
          />
          <PricingCard
            text={"text-dark-blue"}
            background={"bg-light-green/50"}
            price={"15"}
            title={"Highly-efficient virtual machines"}
            benefitOne={"Build, deploy, and scale apps quickly."}
            benefitTwo={
              "Fully managed solution, zero infrastructure management."
            }
            benefitThree={"Highly up on demand."}
            offset={-15}
            delay={0.5}
          />
          {/* Footer */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="col-span-1 md:col-span-2 bg-white rounded-4xl p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">
                You've got unique businesses?
              </p>
              <p className="sectionSubtitle">
                We've got powerful solutions to meet your needs. <br /> Chat
                with us to get started!
              </p>
            </div>
            <div>
              <button className="buttonGreen">Contact sales</button>
            </div>
          </motion.div>
        </div>
        {/* Trusted Brands */}
        <div className="flex flex-col items-center gap-4">
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionSubtitle"
          >
            Trusted by world's best companies
          </motion.span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 md:gap-8">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-medium-blue text-2xl font-semibold flex justify-center items-center gap-0"
            >
              <AiFillFacebook />
              Facebook
            </motion.div>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.25 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-medium-blue text-2xl font-semibold flex justify-center items-center gap-0"
            >
              <AiFillApple />
              Apple
            </motion.div>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-medium-blue text-2xl font-semibold flex justify-center items-center gap-0"
            >
              <AiFillGoogleSquare />
              Google
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
