import Input from "./Input";
import useFormValidation from "../hooks/useBookingFormValidation";

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
      className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:max-w-2xl"
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
    </form>
  );
};

export default BookingForm;
