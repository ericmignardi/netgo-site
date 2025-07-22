import { motion } from "motion/react";

const ProductsCard = ({
  icon: Icon,
  title,
  description,
  titleText,
  subtitleText,
  background,
  offset,
  delay,
}) => {
  return (
    <motion.div
      initial={{ x: offset, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={`min-h-[300px] flex flex-col justify-between rounded-4xl ${background} p-8`}
    >
      <div className="flex flex-col gap-4">
        <Icon className="text-light-green text-2xl" />
        <h3 className={`text-xl font-semibold ${titleText}`}>{title}</h3>
        <p
          className={`text-sm ${
            subtitleText ? subtitleText : "text-medium-blue/80"
          }`}
        >
          {description}
        </p>
      </div>
      <a
        className={`underline text-sm mt-4 ${titleText ? titleText : ""}`}
        href="#"
      >
        Explore the product
      </a>
    </motion.div>
  );
};

export default ProductsCard;
