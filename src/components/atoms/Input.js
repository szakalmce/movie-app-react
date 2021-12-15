import React from "react";

const Input = ({ className, placeholder, type, name, value, onChange }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
