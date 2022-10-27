import Router, { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Button";
import Input from "../../Input/input";
interface FormInputValues {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  state: string;
  address: string;
  id: string;
}

function getFormValues() {
  let storedValues;
  if (typeof window !== "undefined") {
    storedValues = localStorage.getItem("employees") ?? "{}";
  }

  if (!storedValues)
    return {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      state: "",
      address: "",
    };
  return JSON.parse(storedValues);
}

const EmployeeForm = () => {
  const [inputs, setInputs] = useState<FormInputValues>(getFormValues);
  const [formValues, setFormValues] = useState<Array<FormInputValues>>([]);
  const { firstname, lastname, phone, email, state, address } = inputs;
  const initialRender = useRef(true);
  const router = useRouter();

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dataLen = formValues.length;
    const generatedId = "EMP" + dataLen.toString().padStart(5, "0");
    setFormValues(
      (previousValues) =>
        [...previousValues, { ...inputs, id: generatedId }] as FormInputValues[]
    );
  }

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    localStorage.setItem("employees", JSON.stringify(formValues));
  }, [formValues]);
  return (
    <>
      <form onClick={handleSubmit}>
        <div className="grid gap-4">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0  lg:space-x-4">
            <Input
              placeholder="Firstname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="Lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="flex  flex-col lg:flex-row space-y-4 lg:space-y-0  lg:space-x-4">
            <Input
              placeholder="Phone Number"
              type="number"
              name="phone"
              value={phone}
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="flex  flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <Input
              placeholder="Address"
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="State"
              type="text"
              name="state"
              value={state}
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="flex self-end justify-end mt-6">
          <Button type="submit">Register Employee</Button>
        </div>
      </form>
    </>
  );
};

export default EmployeeForm;
