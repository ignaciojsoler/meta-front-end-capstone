import BookingForm from "../components/BookingForm";
import useFormValidation from "../hooks/useBookingFormValidation";
import { useNavigate } from "react-router-dom";
import { UserData } from "../interfaces/interfaces";
import { useState } from "react";
import Loader from "../components/Loader";

const Reservations = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigateTo = useNavigate();
  const {
    handleFormSubmit,
  } = useFormValidation();

  const onSubmit = async (userData: UserData) => {
    setIsLoading(true);  
    try {
      const response = await handleFormSubmit(userData);
      if (response) {
        navigateTo("/confirmation");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pt-32 pb-6">
      <h2 className="text-5xl font-bold font-heading text-center">Reservations</h2>
      {
        isLoading ? (
          <Loader/>
        ) : (
          <BookingForm onSubmit={onSubmit}/>
        )
      }
    </section>
  )
}

export default Reservations;