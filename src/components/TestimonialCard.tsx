import { Testimonial } from "../interfaces/interfaces";
import personOneImg from "../assets/person1.jpg";
import personTwoImg from "../assets/person2.jpg";
import personThreeImg from "../assets/person3.jpg";
import personFourImg from "../assets/person4.jpg";
import starIcon from "../assets/star.svg";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { id, rating, name, review } = testimonial;

  const getImage = () => {
    switch (id) {
      case 1:
        return personOneImg;
      case 2:
        return personTwoImg;
      case 3:
        return personThreeImg;
      case 4:
        return personFourImg;
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} src={starIcon} alt="star" />);
    }
    return stars;
  }

  return (
    <li className="flex flex-col items-start gap-y-4 bg-tertiary p-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-x-2">
        <p className="text-lg font-bold ">{rating}</p>
        {renderStars()}
      </div>
      <div className="flex items-center gap-x-4">
        <img
          src={getImage()}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="text-md font-bold">{name}</h3>
      </div>
      <div>
        <p><span></span>{review}".</p>
      </div>
    </li>
  );
};

export default TestimonialCard;
