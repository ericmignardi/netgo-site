import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white">
      <div className="center p-4 flex justify-between items-center">
        {/* Desktop Navigation */}
        <a href="/" className="inline-block">
          <img className="w-40 h-auto" src={logo} alt="Netgo brand logo" />
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#products">Products</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
          <a href="#building">Building</a>
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
