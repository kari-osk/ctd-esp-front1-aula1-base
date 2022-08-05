import { useState } from "react";

const Input = ({ name, label, value, onChange, type = "text" }) => {

  const onBlur = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} onBlur={onBlur} />
    </div>
  );
};

export default Input;
