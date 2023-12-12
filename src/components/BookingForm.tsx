import Input from "./Input";
import useFormValidation from "../hooks/useBookingFormValidation";
import Button from "./Button";
import { UserData } from "../interfaces/interfaces";

interface BookingFormProps {
  onSubmit: (userData: UserData) => Promise<void>;
}

const BookingForm = ( { onSubmit }: BookingFormProps) => {
  const {
    userData,
    isFormValid,
    updateUserData,
    userDataValidations,
  } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData)
  };

  return (
    <form
      className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:max-w-2xl gap-4 py-6 "
      onSubmit={handleSubmit}
    >
      <Input
        label="First Name"
        placeholder="John"
        validationFunctions={userDataValidations.firstName}
        onChangeText={(value) => updateUserData("firstName", value)}
        value={userData.firstName}
      />
      <Input
        label="Last Name"
        placeholder="Wick"
        validationFunctions={userDataValidations.lastName}
        onChangeText={(value) => updateUserData("lastName", value)}
        value={userData.lastName}
      />
      <Input
        label="Email"
        placeholder="johnwick@example.com"
        validationFunctions={userDataValidations.email}
        onChangeText={(value) => updateUserData("email", value)}
        value={userData.email}
      />
      <Input
        label="Phone Number"
        placeholder="(123) 456-7890"
        validationFunctions={userDataValidations.phone}
        onChangeText={(value) => updateUserData("phone", value)}
        value={userData.phone}
      />
      <Input
        label="Date"
        placeholder="12/12/2023"
        type="date"
        validationFunctions={userDataValidations.date}
        onChangeText={(value) => updateUserData("date", value)}
        value={userData.date}
      />
      <Input
        label="Number of guests"
        placeholder="Select the number of guests"
        type="number"
        validationFunctions={userDataValidations.guests}
        onChangeText={(value) => updateUserData("guests", value)}
        value={userData.guests}
      />
      <Input
      label="Time"
      type="select"
      placeholder="Select the time"
      options={["18:00", "19:00", "20:00", "21:00", "22:00"]}
      validationFunctions={userDataValidations.time}
      onChangeText={(value) => updateUserData("time", value)}
      value={userData.time}
      />
      <Input
      label="Occasion"
      placeholder="Select the occasion"
      type="select"
      options={["Birthday", "Anniversary", "Engagement", "Other"]}
      validationFunctions={userDataValidations.ocassion}
      onChangeText={(value) => updateUserData("ocassion", value)}
      value={userData.ocassion}
      />
      <Button
        text="Book table"
        onClick={() => {}}
        disabled={!isFormValid}
        className="col-span-1 md:col-span-2"
      />
    </form>
  );
};

export default BookingForm;
