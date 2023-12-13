import { Suspense } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </Suspense>
  );
};

export default Home;
