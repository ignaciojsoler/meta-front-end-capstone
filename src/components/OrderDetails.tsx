import { UserData } from "../interfaces/interfaces";
import restaurantImg from "../assets/restaurant.jpg";

interface OrderDetailsProps {
  userData: UserData;
}

const OrderDetails = ({ userData }: OrderDetailsProps) => {
  const { firstName, lastName, email, phone, date, guests, time, ocassion } =
    userData;

  return (
    <article className="bg-secondary p-8 rounded-lg flex flex-col text-white">
      <div className="flex items-center gap-x-4">
        <img src={restaurantImg} alt="Restaurant" className="h-40 rounded-md" />
        <div className="space-y-2">
          <h5 className="text-lg">Little Lemon Restaurant</h5>
          <p className="text-xl">{ocassion}</p>
        </div>
      </div>
    </article>
  );
};

export default OrderDetails;
