import Building from "./components/Building";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Security from "./components/Security";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Hero />
        <Statistics />
        <Products />
        <Security />
        <Pricing />
        <Building />
      </Layout>
    </div>
  );
};

export default App;
