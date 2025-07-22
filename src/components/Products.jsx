import { FiGrid, FiLock, FiStar } from "react-icons/fi";
import ProductsCard from "./ProductsCard";
import { motion } from "motion/react";

const Products = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-light-green/10 rounded-4xl m-4"
      id="products"
    >
      <div className="center sectionPadding flex flex-col justify-between items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionBadge"
          >
            Products
          </motion.span>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionTitle"
          >
            Explore tools for bringing <br /> your vision to life
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="sectionSubtitle"
          >
            From simple tools and predictable pricing to support designed for
            growing businesses.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
          <ProductsCard
            icon={FiLock}
            title={"Kubernetes Service"}
            description={"Build and scale your apps with Kubernetes"}
            background={"bg-white"}
            offset={-20}
            delay={0}
          />
          <ProductsCard
            icon={FiStar}
            title={"No Worries AI Studio"}
            description={
              "Deliver accurate, hyper-personalized responses in your AI applications."
            }
            titleText={"text-white"}
            subtitleText={"text-white/80"}
            background={"bg-medium-blue"}
            offset={-15}
            delay={0.25}
          />
          <ProductsCard
            icon={FiGrid}
            title={"Microsoft Fabric"}
            description={
              "Bring data and analytics services together on an AI-powered platform."
            }
            background={"bg-light-green/50"}
            offset={-10}
            delay={0.5}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
