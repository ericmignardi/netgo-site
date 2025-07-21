const ProductsCard = ({
  icon: Icon,
  title,
  description,
  titleText,
  subtitleText,
  background,
}) => {
  return (
    <div
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
    </div>
  );
};

export default ProductsCard;
