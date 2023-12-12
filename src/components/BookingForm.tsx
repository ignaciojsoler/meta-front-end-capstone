import Input from "./Input";
import useFormValidation from "../hooks/useBookingFormValidation";
import Button from "./Button";

const BookingForm = () => {
  const {
    userData,
    isFormValid,
    handleFormSubmit,
    updateUserData,
    userDataValidations,
  } = useFormValidation();

  return (
    <form
      className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:max-w-2xl gap-4 py-6 "
      onSubmit={handleFormSubmit}
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
