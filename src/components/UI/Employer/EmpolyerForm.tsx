import { useEffect, useRef, useState } from "react";
import Button from "../../Button";
import Input from "../../Input/input";

interface IFormInputValues {
  email: string;
  fullname: string;
  rcnumber: string;
  tin: string;
  phone: string;
  address: string;
  id: string;
}

function getFormValues() {
  const storedValues = localStorage.getItem("form");
  if (!storedValues)
    return {
      email: "",
      fullname: "",
      rcnumber: "",
      tin: "",
      phone: "",
      address: "",
    };
  return JSON.parse(storedValues);
}

const EmpolyerForm = () => {
  const [inputs, setInputs] = useState<IFormInputValues>(getFormValues);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState<Array<IFormInputValues>>([
    {
      email: "",
      fullname: "",
      rcnumber: "",
      tin: "",
      phone: "",
      address: "",
      id: "",
    },
  ]);
  const { fullname, rcnumber, tin, email, phone, address } = inputs;
  const initialRender = useRef(true);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    console.log(inputs, "inputssss");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dataLen = formValues.length;
    const generatedId = "EMP" + dataLen.toString().padStart(5, "0");
    setFormValues(
      (previousValues) =>
        [
          ...previousValues,
          { ...inputs, id: generatedId },
        ] as IFormInputValues[]
    );
    console.log(formValues, "formValues");
  }

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    localStorage.setItem("form", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <>
      <form onClick={handleSubmit}>
        <div className="grid gap-4">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0  lg:space-x-4">
            <Input
              placeholder="Employer Name"
              type="text"
              name="fullname"
              value={fullname}
              required={true}
              onChange={handleChange}
            />
            <Input
              placeholder="Rc Number"
              type="number"
              name="rcnumber"
              value={rcnumber}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="flex  flex-col lg:flex-row space-y-4 lg:space-y-0  lg:space-x-4">
            <Input
              placeholder="Tin"
              type="text"
              name="tin"
              value={tin}
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
              placeholder="Phone Number"
              type="number"
              name="phone"
              value={phone}
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="flex self-end justify-end mt-6">
          <Button type="submit">Register Employer</Button>
        </div>
      </form>
    </>
  );
};

export default EmpolyerForm;
