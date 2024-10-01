import React, { ChangeEvent, useState } from "react";
import "../../../assets/style/components/forms/FormBase.css";
import { FormInput } from "../../../components/forms/FormInput";
import {
  GetTestFormPropsDefaultValue,
  TestFormProps,
} from "./types/TestForm.interface";
import { FormInputProps } from "../../../components/forms/types/FormInputProps.interface";
import {
  FormEnumInput,
  FormEnumInputProps,
} from "../../../components/forms/FormEnumInput";
import { Gender } from "../../auth/types/Gender.enum";
import { Role } from "../../auth/types/Role.enum";

export const Test: React.FC = () => {
  const [form, setForm] = useState<TestFormProps>(
    GetTestFormPropsDefaultValue()
  );
  const [fieldError, setFieldError] = useState<{ [key: string]: string }>({});
  const [formError, setFormError] = useState("");

  const formUpdateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setFieldError({ ...fieldError, [event.target.name]: "" });
    setFormError("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const formInputs: FormInputProps[] = [
    {
      id: "firstName",
      label: "First name",
      type: "text",
      placeholder: "First name",
      onChange: formUpdateHandler,
      isRequired: true,
      errorMessage: fieldError["firstName"],
    },
    {
      id: "lastName",
      label: "Last name",
      type: "text",
      placeholder: "Last name",
      onChange: formUpdateHandler,
      isRequired: true,
      errorMessage: fieldError["lastName"],
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "example@domain.com",
      onChange: formUpdateHandler,
      isRequired: true,
      errorMessage: fieldError["email"],
    },
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
      onChange: formUpdateHandler,
      isRequired: true,
      errorMessage: fieldError["username"],
    },
    {
      id: "dateOfBirth",
      label: "Date of birth",
      type: "date",
      onChange: formUpdateHandler,
      isRequired: true,
      errorMessage: fieldError["dateOfBirth"],
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Phone",
      onChange: formUpdateHandler,
      isRequired: true,
      errorMessage: fieldError["phone"],
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "Address",
      onChange: formUpdateHandler,
      errorMessage: fieldError["address"],
    },
  ];

  const formEnumInputs: (
    | FormEnumInputProps<typeof Gender>
    | FormEnumInputProps<typeof Role>
  )[] = [
    {
      id: "gender",
      enumType: Gender,
      label: "Gender",
      onChange: (value: Gender) => {
        setForm({
          ...form,
          gender: value,
        });
      },
      isRequired: true,
    },
    {
      id: "role",
      enumType: Role,
      label: "Gender",
      onChange: (value: Role) => {
        setForm({
          ...form,
          role: value,
        });
      },
      isRequired: true,
    },
  ];

  return (
    <div className="form-component">
      <form className="form-container" onSubmit={formSubmitHandler}>
        <div className="form-header">
          <h2>Form name</h2>
        </div>
        <div className="form-body">
          {formInputs.map((formInput) => {
            return (
              <FormInput
                key={formInput.id}
                id={formInput.id}
                label={formInput.label}
                type={formInput.type}
                placeholder={formInput.placeholder}
                onChange={formInput.onChange}
                isRequired={formInput.isRequired}
                errorMessage={formInput.errorMessage}
              />
            );
          })}
          {formEnumInputs.map((input) => (
            <FormEnumInput
              key={input.id}
              id={input.id}
              enumType={input.enumType}
              label={input.label}
              onChange={input.onChange}
            />
          ))}
        </div>
        <div className="form-footer">
          <button type="submit">submit</button>
          {formError && <p className="form-error"></p>}
        </div>
      </form>
    </div>
  );
};
