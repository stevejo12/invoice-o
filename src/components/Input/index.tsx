import React from 'react';

import "./index.scss";

interface IProps {
  inputType?: string,
  name: string,
  value: string,
  label: string,
  setValue: (newValue: string) => void,

}

const Input = ({ inputType, name, label, value, setValue }: IProps) => {
  return (
    <div className="input__container">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input 
        className="input__box"
        type={inputType || "text"}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Input