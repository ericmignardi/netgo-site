import { FiGrid, FiLock, FiStar } from "react-icons/fi";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <section className="bg-light-green/10 rounded-4xl m-4">
      <div className="center sectionPadding flex flex-col justify-between items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="sectionBadge">Products</span>
          <h2 className="sectionTitle">
            Explore tools for bringing <br /> your vision to life
          </h2>
          <p className="sectionSubtitle">
            From simple tools and predictable pricing to support designed for
            growing businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
          <ProductsCard
            icon={FiLock}
            title={"Kubernetes Service"}
            description={"Build and scale your apps with Kubernetes"}
            background={"bg-white"}
          />
          <ProductsCard
            icon={FiStar}
            title={"No Worries AI Studio"}
            description={
              "Deliver accurate, hyper-personalized responses in your AI applications."
            }
            titleText={"text-white"}
            subtitleText={"text-white/80"}
            background={"bg-medium-blue"}
          />
          <ProductsCard
            icon={FiGrid}
            title={"Microsoft Fabric"}
            description={
              "Bring data and analytics services together on an AI-powered platform."
            }
            background={"bg-light-green/50"}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
