import { FiCornerUpRight } from "react-icons/fi";
import logo from "../assets/logoLight.svg";

const MobileHeader = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className="absolute top-0 right-0 w-full h-[100vh] bg-light-blue flex flex-col gap-4 text-2xl text-white p-8">
      <a href="/">
        <img
          className="w-40 h-auto text-white"
          src={logo}
          alt="Netgo brand logo"
        />
      </a>
      <hr className="text-light-green" />

      <a
        className="flex justify-between items-center"
        href="#products"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        Products{" "}
        {window.location.hash === "#products" && (
          <FiCornerUpRight className="text-dark-blue" />
        )}
      </a>
      <a
        className="flex justify-between items-center"
        href="#security"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        Security{" "}
        {window.location.hash === "#security" && (
          <FiCornerUpRight className="text-dark-blue" />
        )}
      </a>
      <a
        className="flex justify-between items-center"
        href="#pricing"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        Pricing{" "}
        {window.location.hash === "#pricing" && (
          <FiCornerUpRight className="text-dark-blue" />
        )}
      </a>
      <a
        className="flex justify-between items-center"
        href="#building"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        Building{" "}
        {window.location.hash === "#building" && (
          <FiCornerUpRight className="text-dark-blue" />
        )}
      </a>
    </div>
  );
};

export default MobileHeader;
