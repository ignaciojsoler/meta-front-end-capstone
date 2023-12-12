import { FormEvent, useState } from "react";
import {
  isEmail,
  maxLength,
  minLength,
  notEmpty,
  notSpecialCharacter,
} from "../helpers/validations";
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
  };

  return (
    <form
      className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:max-w-2xl"
      onSubmit={handleFormSubmit}
    >
      <Input
        label="First Name"
        placeholder="John"
        validationFunctions={[notEmpty, notSpecialCharacter, maxLength(20)]}
        onChangeText={(value) => setUserData({ ...userData, firstName: value })}
        value={userData.firstName}
      />
      <Input
        label="Last Name"
        placeholder="Wick"
        validationFunctions={[notEmpty, notSpecialCharacter, maxLength(20)]}
        onChangeText={(value) => setUserData({ ...userData, lastName: value })}
        value={userData.lastName}
      />
      <Input
        label="Email"
        placeholder="johnwick@example.com"
        validationFunctions={[isEmail]}
        onChangeText={(value) => setUserData({ ...userData, email: value })}
        value={userData.email}
      />
      <Input
        label="Phone Number"
        placeholder="(123) 456-7890"
        validationFunctions={[minLength(9), maxLength(9)]}
        onChangeText={(value) => setUserData({ ...userData, phone: value })}
        value={userData.phone}
      />
    </form>
  );
};

export default BookingForm;
