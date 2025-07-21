import PricingCard from "./PricingCard";
import {
  AiFillFacebook,
  AiFillApple,
  AiFillGoogleSquare,
} from "react-icons/ai";

const Pricing = () => {
  return (
    <section className="bg-gray-100 rounded-4xl m-4">
      <div className="center sectionPadding flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="sectionBadge">Pricing</span>
          <h2 className="sectionTitle">
            Choose the cloud <br /> solutions you need
          </h2>
          <p className="sectionSubtitle max-w-xl">
            Our sales team can help you find the best mix of cloud solutions for
            your business needs.
          </p>
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
          />
          {/* Footer */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-4xl p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
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
          </div>
        </div>
        {/* Trusted Brands */}
        <div className="flex flex-col items-center gap-4">
          <span className="sectionSubtitle">
            Trusted by world's best companies
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 md:gap-8">
            <div className="text-medium-blue text-2xl font-semibold flex justify-center items-center gap-0">
              <AiFillFacebook />
              Facebook
            </div>
            <div className="text-medium-blue text-2xl font-semibold flex justify-center items-center gap-0">
              <AiFillApple />
              Apple
            </div>
            <div className="text-medium-blue text-2xl font-semibold flex justify-center items-center gap-0">
              <AiFillGoogleSquare />
              Google
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
