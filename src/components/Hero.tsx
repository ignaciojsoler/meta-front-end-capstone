import Button from "./Button";

const Hero = () => {
  return (
    <main className="w-full bg-secondary">
      <section className="max-w-6xl mx-auto flex flex-col px-4 py-6 gap-y-8">
        <div>
          <h1 className="text-primary font-heading text-5xl font-midum">
            Little Lemon
          </h1>
          <h2 className="text-white font-heading text-3xl">Chicago</h2>
        </div>
        <p className="text-white">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button text="Reserve a table" onClick={() => {}} className="w-fit" />
      </section>
    </main>
  );
};

export default Hero;
