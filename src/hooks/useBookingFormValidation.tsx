import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  isEmail,
  maxLength,
  minLength,
  notEmpty,
  notSpecialCharacter,
  onlyNumbers,
} from "../helpers/validations";
import { UserData, UserDataValidations } from "../interfaces/interfaces";

const useFormValidation = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const userDataValidations: UserDataValidations = useMemo(() => {
    return {
      firstName: [notEmpty, notSpecialCharacter, maxLength(20)],
      lastName: [notEmpty, notSpecialCharacter, maxLength(20)],
      email: [isEmail],
      phone: [minLength(9), maxLength(9), onlyNumbers],
    };
  }, []);

  const validateUserData = useCallback(
    (property: string, value: string | null): boolean => {
      if (property in userDataValidations) {
        for (const validationFunction of userDataValidations[property]) {
          const [isValid] = validationFunction(value || "");
          if (!isValid) {
            return false;
          }
        }
      }
      return true;
    },
    [userDataValidations]
  );

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userData);
  };

  useEffect(() => {
    let formValid = true;

    for (const property in userData) {
      if (property in userData) {
        const value = userData[property as keyof UserData];
        const isValid = validateUserData(property, value);

        if (!isValid) {
          formValid = false;
          break;
        }
      }
    }

    setIsFormValid(formValid);
  }, [userData, validateUserData, userDataValidations]);

  const updateUserData = (property: keyof UserData, value: string | null) => {
    setUserData((prevUserData) => ({ ...prevUserData, [property]: value }));
  };

  return {
    userData,
    isFormValid,
    handleFormSubmit,
    updateUserData,
    userDataValidations,
  };
};

export default useFormValidation;
