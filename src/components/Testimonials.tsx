import { useEffect, useState } from "react"
import { Testimonial } from "../interfaces/interfaces";
import testimonialsData from "../data/testimonials.json";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        setTestimonials(testimonialsData.testimonials as Testimonial[]);
    }, []);
    
  return (
    <section className="w-full bg-secondary">
        <div className="max-w-4xl mx-auto px-4 py-9 flex flex-col items-center justify-center gap-y-4 lg:py-36">
            <h2 className="text-white font-heading text-5xl font-medium">
                Testimonials
            </h2>
            <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
                {testimonials?.map((testimonial ) => (
                    <TestimonialCard key={testimonial.id } testimonial={ testimonial } />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Testimonials