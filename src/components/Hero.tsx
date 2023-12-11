import Button from "./Button";
import heroImage from "../assets/restauranfood.jpg";

const Hero = () => {
  return (
    <main className="w-full bg-secondary">
      <section className="relative max-w-5xl mx-auto flex justify-between px-4 py-6 ">
        <div className="flex flex-col gap-y-8 max-w-lg">
          <div>
            <h1 className="text-primary font-heading text-5xl font-midum">
              Little Lemon
            </h1>
            <h2 className="text-white font-heading text-3xl">Chicago</h2>
          </div>
          <p className="text-white">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button text="Reserve a table" onClick={() => {}} className="w-fit" />
        </div>
        <img
          src={heroImage}
          alt="Restaurant food"
          className="hidden lg:block absolute right-0 h-96 w-96 object-cover rounded-xl"
        />
      </section>
    </main>
  );
};

export default Hero;
