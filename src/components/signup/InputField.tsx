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

export const InputField: FC<InputFieldProps> = ({
  label,
  onChange,
  required = true,
  minLength,
}) => {
  const mark = label.toLocaleLowerCase();
  return (
    <TextField
      onChange={onChange}
      required={required}
      fullWidth
      id={mark}
      label={label}
      name={mark}
      type={mark}
      data-testid={`${mark}Input`}
      //   autoComplete={mark}
      inputProps={{
        minLength,
      }}
    />
  );
};
