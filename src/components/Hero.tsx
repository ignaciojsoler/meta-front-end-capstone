import Button from "./Button";
import heroImage from "../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigateTo = useNavigate();

  return (
    <main className="w-full bg-secondary pt-20">
      <section className="relative max-w-4xl mx-auto flex justify-between px-4 py-6">
        <header className="mx-auto flex flex-col items-center gap-y-8 max-w-lg lg:mx-0 lg:items-start">
          <div>
            <h1 className="text-primary font-heading text-5xl font-medium text-center lg:text-start">
              Little Lemon
            </h1>
            <h2 className="text-white font-heading text-3xl text-center lg:text-start">Chicago</h2>
          </div>
          <p className="text-white text-center lg:text-start">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button text="Reserve a table" onClick={() => {navigateTo("/reservations")}} className="w-fit" />
        </header>
        <img loading="lazy"
          src={heroImage}
          alt="Restaurant food"
          className="hidden lg:block absolute right-0 h-96 w-96 object-cover rounded-xl"
        />
      </section>
    </main>
  );
};

export default Hero;
