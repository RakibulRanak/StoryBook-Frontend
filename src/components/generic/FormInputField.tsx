import React, { FC } from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  minLength?: number;
}

export const FormInputField: FC<InputFieldProps> = ({
  label,
  onChange,
  required = true,
  minLength,
}) => {
  const mark = label.toLocaleLowerCase().split(" ").join("");
  return (
    <TextField
      onChange={onChange}
      required={required}
      fullWidth
      id={mark}
      label={label}
      name={mark}
      type={mark === "confirmpassword" ? "password" : mark}
      data-testid={`${mark}Input`}
      autoComplete={mark}
      inputProps={{
        minLength,
      }}
    />
  );
};
