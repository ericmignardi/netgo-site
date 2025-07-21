import { FiCheck } from "react-icons/fi";

const PricingCard = ({
  text,
  background,
  price,
  title,
  benefitOne,
  benefitTwo,
  benefitThree,
}) => {
  return (
    <div
      className={`rounded-4xl p-8 ${background} flex flex-col justify-center gap-4`}
    >
      <h3 className={`text-xl font-semibold ${text}`}>Kubernetes Service</h3>
      <span className={`text-sm ${text}/80`}>Start at</span>
      <span className={`text-4xl ${text}`}>${price} / month</span>
      <span className={`text-sm ${text}/80`}>{title}</span>
      <hr className="text-white/50 my-4" />
      <p className={`flex items-center gap-2 text-sm ${text}/80`}>
        <FiCheck className="text-green-500" /> {benefitOne}
      </p>
      <p className={`flex items-center gap-2 text-sm ${text}/80`}>
        <FiCheck className="text-green-500" /> {benefitTwo}
      </p>
      <p className={`flex items-center gap-2 text-sm ${text}/80`}>
        <FiCheck className="text-green-500" /> {benefitThree}
      </p>
      <a className={`underline ${text}`} href="#">
        View pricing
      </a>
    </div>
  );
};

export default PricingCard;
