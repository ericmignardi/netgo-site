import { FiArrowRight } from "react-icons/fi";
import hero from "../assets/hero.svg";
import bg from "../assets/heroBackground.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-fit bg-center bg-cover bg-no-repeat rounded-4xl m-4 mt-22"
    >
      <div className="center sectionPadding flex flex-col justify-between items-center gap-16 bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-white bg-white/10 text-sm uppercase rounded-full p-2">
            AI Solution
          </span>
          <h1 className="heroTitle">
            Future cloud computing <br /> starts right here
          </h1>
          <p className="heroSubtitle">
            Powerful and production-ready, our cloud platform has the solutions
            you need to succeed.
          </p>
          <div className="flex gap-2">
            <button className="buttonGreen flex items-center gap-2">
              Get started <FiArrowRight />
            </button>
            <button className="buttonBlue">Try for free</button>
          </div>
        </div>
        <div>
          <img src={hero} alt="Hero section image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
