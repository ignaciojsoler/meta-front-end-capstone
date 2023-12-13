import { useCallback, useEffect, useMemo, useState } from "react";
import {
  isEmail,
  maxLength,
  maxValue,
  minLength,
  minValue,
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
    date: null,
    guests: null,
    time: null,
    ocassion: null,
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const userDataValidations: UserDataValidations = useMemo(() => {
    return {
      firstName: [notEmpty, notSpecialCharacter, maxLength(20)],
      lastName: [notEmpty, notSpecialCharacter, maxLength(20)],
      email: [isEmail],
      phone: [minLength(9), maxLength(9), onlyNumbers],
      date: [notEmpty],
      guests: [minValue(1), maxValue(10)],
      time: [notEmpty],
      ocassion: [notEmpty],
    };
  }, []);

  const validateUserData = useCallback(
    (property: string, value: string | Date | number | null): boolean => {
      if (property in userDataValidations) {
        for (const validationFunction of userDataValidations[property]) {
          const [isValid] = validationFunction(value?.toString() || "");
          if (!isValid) {
            return false;
          }
        }
      }
      return true;
    },
    [userDataValidations]
  );

  const handleFormSubmit = async (userData: UserData): Promise<boolean> => {
    try {
      await new Promise(resolve => setTimeout(() => {
        sessionStorage.setItem("userData", JSON.stringify(userData));
        resolve(true);
      }, 2000));
  
      const isSuccess = Math.random() < 1;
      if (isSuccess) {
        return true;
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      throw new Error("An error occurred while submitting the form");
    }
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
