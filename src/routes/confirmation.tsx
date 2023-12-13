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
    <section className="min-h-screen mx-auto flex flex-col items-center justify-center w-full max-w-4xl">
      {userData ? (
        <div className="w-full px-4 py-32">
          <OrderDetails userData={userData} />
        </div>
      ) : (
        <>
        <h1 className='text-6xl font-heading text-center'> Oops! </h1>
         <h2 className='text-2xl'>Something went wrong :(</h2>
        </>
         
      )}
    </section>
  );
};

export default Confirmation;
