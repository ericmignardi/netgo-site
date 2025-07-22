import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import logo from "../assets/logoLight.svg";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-medium-blue rounded-4xl m-4"
    >
      <div className="center sectionPadding grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-center items-start text-center md:text-left gap-8">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-2"
        >
          <span className="text-sm text-white">Company</span>
          <a className="text-xs text-white/50" href="#">
            About
          </a>
          <a className="text-xs text-white/50" href="#">
            Leadership
          </a>
          <a className="text-xs text-white/50" href="#">
            Blog
          </a>
          <a className="text-xs text-white/50" href="#">
            Careers
          </a>
          <a className="text-xs text-white/50" href="#">
            Referral Program
          </a>
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-2"
        >
          <span className="text-sm text-white">Resources</span>
          <a className="text-xs text-white/50" href="#">
            Products Overview
          </a>
          <a className="text-xs text-white/50" href="#">
            Droplets
          </a>
          <a className="text-xs text-white/50" href="#">
            Paperspace
          </a>
          <a className="text-xs text-white/50" href="#">
            Tools & Integrations
          </a>
          <a className="text-xs text-white/50" href="#">
            Functions
          </a>
          <a className="text-xs text-white/50" href="#">
            API
          </a>
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.75 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-2"
        >
          <span className="text-sm text-white">Community</span>
          <a className="text-xs text-white/50" href="#">
            Tutorials
          </a>
          <a className="text-xs text-white/50" href="#">
            Q&A
          </a>
          <a className="text-xs text-white/50" href="#">
            Current Research
          </a>
          <a className="text-xs text-white/50" href="#">
            Shop Swag
          </a>
          <a className="text-xs text-white/50" href="#">
            Compass Council
          </a>
          <a className="text-xs text-white/50" href="#">
            Meetups
          </a>
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-2"
        >
          <span className="text-sm text-white">Solutions</span>
          <a className="text-xs text-white/50" href="#">
            Website Hosting
          </a>
          <a className="text-xs text-white/50" href="#">
            VPS Hosting
          </a>
          <a className="text-xs text-white/50" href="#">
            Web & Mobile Apps
          </a>
          <a className="text-xs text-white/50" href="#">
            Streaming
          </a>
          <a className="text-xs text-white/50" href="#">
            SaaS Platforms
          </a>
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 1.25 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-2"
        >
          <span className="text-sm text-white">Contact</span>
          <a className="text-xs text-white/50" href="#">
            Support
          </a>
          <a className="text-xs text-white/50" href="#">
            Sales
          </a>
          <a className="text-xs text-white/50" href="#">
            System Status
          </a>
          <a className="text-xs text-white/50" href="#">
            Share your ideas
          </a>
        </motion.div>
      </div>
      <hr className="text-white/50 center" />
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="center flex flex-col md:flex-row justify-between items-center gap-4 p-8"
      >
        <img className="max-w-30" src={logo} alt="No Worries brand logo" />
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} No Worries Technology, LLC
        </p>
        <div className="flex gap-2 text-white">
          <a href="#">
            <FiTwitter />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FiFacebook />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
