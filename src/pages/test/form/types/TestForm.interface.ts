import { Gender } from "../../../auth/types/Gender.enum";
import { Role } from "../../../auth/types/Role.enum";

export interface TestFormProps {
  firstName: string;

  lastName: string;

  email: string;

  password: string;

  age: number;

  dateOfBirth: Date;

  gender: Gender;

  role: Role;
}

export function GetTestFormPropsDefaultValue(): TestFormProps {
  return {
    firstName: "",
    lastName: "",
    email: "example@gmail.com",
    password: "12345678",
    age: 10,
    dateOfBirth: new Date(),
    gender: Gender.MALE,
    role: Role.USER,
  };
}
