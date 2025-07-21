import { FiArrowRight, FiSettings } from "react-icons/fi";
import bg from "../assets/buildingBackground.png";

const Building = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-center bg-cover bg-no-repeat rounded-4xl bg-gray-200 m-4"
    >
      <div className="center sectionPadding flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-2xl text-medium-blue">
            <FiSettings />
          </span>
          <h2 className="heroTitle text-dark-blue">
            Choose the cloud <br /> solutions you need
          </h2>
          <p className="heroSubtitle text-dark-blue/80 max-w-xl">
            Our sales team can help you find the best mix of cloud solutions for
            your business needs.
          </p>
          <div className="flex gap-2">
            <button className="buttonGreen flex gap-2 items-center">
              Get started <FiArrowRight />
            </button>
            <button className="buttonWhite">Try for free</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Building;
