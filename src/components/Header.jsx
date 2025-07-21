import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white">
      <div className="center p-4 flex justify-between items-center">
        {/* Desktop Navigation */}
        <img className="max-w-50" src={logo} alt="No Worries brand logo" />
        <nav className="hidden md:flex gap-8">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Partners</a>
          <a href="#">Pricing</a>
        </nav>
        <div className="hidden md:flex gap-4">
          <button className="buttonWhite">Login</button>
          <button className="buttonGreen">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
