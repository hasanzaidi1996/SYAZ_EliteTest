import { HeroHeader } from "../../components/HeroHeader/HeroHeader";
import { AllProducts } from "../../components/AllProducts/AllProducts";

const HomePage = () => {
  return (
    <>
      <HeroHeader title="Solutions that Inspire, Products that Deliver" />
      <AllProducts />
    </>
  );
};

export default HomePage;
