import { FormEvent, useState } from "react";
import { notEmpty, notSpecialCharacter } from "../helpers/validations";
import Input from "./Input";
import { UserData } from "../interfaces/interfaces";

const BookingForm = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
  });

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:max-w-2xl" onSubmit={handleFormSubmit}>
      <Input
        label="First Name"
        placeholder="John"
        validationFunctions={[notEmpty, notSpecialCharacter]}
        onChangeText={(value) => setUserData({ ...userData, firstName: value })}
        value={userData.firstName}
      />
      <Input label="Last Name" placeholder="Wick" />
      <Input label="Email" placeholder="johnwick@example.com" />
      <Input label="Phone Number" placeholder="(123) 456-7890" />
    </form>
  );
};

export default BookingForm;
