import { UserData } from "../interfaces/interfaces";
import successIcon from "../assets/success-filled.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface OrderDetailsProps {
  userData: UserData;
}

const OrderDetails = ({ userData }: OrderDetailsProps) => {
  const { firstName, lastName, phone, date, guests, time, ocassion } = userData;
  const navigateTo = useNavigate();

  const userDetails = [
    {
      label: "First Name",
      value: firstName,
    },
    {
      label: "Last Name",
      value: lastName,
    },
    {
      label: "Phone",
      value: phone,
    },
    {
      label: "Date",
      value: date,
    },
    {
      label: "Guests",
      value: guests,
    },
    {
      label: "Time",
      value: time,
    },
    {
      label: "Ocassion",
      value: ocassion,
    },
  ];

  return (
    <article className="mx-auto py-6 px-8 rounded-lg flex flex-col items-center gap-y-6 text-white shadow-lg max-w-xl">
      <h1 className="text-green-600 font-heading text-4xl text-center font-semibold">
        Reservation Successful
      </h1>
      <img loading="lazy" src={successIcon} alt="Success icon" className="h-40" />
      <p className="text-black text-center text-xl font-semibold">
        Your table has been booked!
      </p>
      <div className="grid grid-cols-2 w-full text-black border-t pt-4">
        {userDetails.map((detail, idx) => {
          return (
            <>
              <span className={`rounded-md p-3 ${idx % 2 ? "bg-white" : "bg-slate-50"}`}>{detail.label}</span>
              <span className={`rounded-md p-3 text-end ${idx % 2 ? "bg-white" : "bg-slate-50"}`}>{detail.value?.toString()}</span>
            </>
          );
        })}
      </div>
      <Button
      type="dark"
      text="Go back to home"
      className="w-full"
      onClick={() => navigateTo("/")}
      />
    </article>
  );
};

export default OrderDetails;
