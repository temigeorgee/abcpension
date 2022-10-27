import React from "react";
import styled from "styled-components";
import { FC, ReactNode } from "react";

const InputField = styled.input`
  /* width: 21rem; */
  padding: 0.3em 1em;
  border-radius: 5px;
  font-size: 13px;
  color: black;
  background: #ffffff;
  outline: none;
  box-shadow: none;
  border: 1px solid #c2c2c2;
  transition: all 0.3s ease-out;
  position: relative;
  height: 2.78rem;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
`;

type props = {
  value?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  accept?: string;
  type?: string;
  className?: string;
  required: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<props> = ({
  value,
  type,
  id,
  onChange,
  placeholder,
  name,
  required,
  accept,
}) => {
  return (
    <>
      <InputField
        type={type}
        id={id}
        required={required}
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        accept={accept}
      />
    </>
  );
};

export default Input;
