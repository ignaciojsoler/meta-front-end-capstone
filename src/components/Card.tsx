import { Product } from "../interfaces/interfaces";
import greekSaladImg from "../assets/greek-salad.jpg";
import bruchettaImg from "../assets/bruchetta.svg";
import lemonDessertImg from "../assets/lemon-dessert.jpg";
import deliveryIcon from "../assets/delivery-icon.svg";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const { id, name, price, description } = product;

  const getImage = () => {
    switch (id) {
      case 1:
        return greekSaladImg;
      case 2:
        return bruchettaImg;
      case 3:
        return lemonDessertImg;
    }
  };

  return (
    <article className="relative rounded-xl overflow-hidden max-w-sm bg-tertiary">
      <img src={getImage()} alt={name} className=" object-cover w-full h-56" />
      <div className="px-4 py-6 space-y-6 ">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-heading font-bold">{name}</h3>
          <p className="font-bold text-accent-primary">{price}</p>
        </div>
        <p>{description}</p>
        <p className="relative bottom-0 font-bold">Order a delivery <img src={deliveryIcon} alt="Delivery icon" className="inline-block w-4 h-4 ml-2"/></p>
      </div>
    </article>
  );
};

export default Card;
