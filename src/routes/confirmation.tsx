import { useEffect, useState } from "react";
import { SK_USER_DATA } from "../base/constants";
import { UserData } from "../interfaces/interfaces";
import OrderDetails from "../components/OrderDetails";

const Confirmation = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storageUserData: string | null = sessionStorage.getItem(SK_USER_DATA);
    if (storageUserData) setUserData(JSON.parse(storageUserData));
  }, []);

  return (
    <section className="min-h-screen max-w-4xl mx-auto flex flex-col items-center justify-center">
      {userData ? (
        <>
          <h2 className=" font-heading text-4xl font-semibold">
            Booking Confirmation
          </h2>
          <OrderDetails userData={userData} />
        </>
      ) : (
        <h2 className="text-5xl font-bold font-heading text-center">
          Oops, something went wrong :(
        </h2>
      )}
    </section>
  );
};

export default Confirmation;
