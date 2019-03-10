import React from "react";

const Input = ({ name, type, handleChange, value }) => {
  return (
    <input
      type={type}
      placeholder={name + "..."}
      name={name}
      className="form-control mt-3"
      onChange={e => handleChange(e)}
      value={value}
      required
    />
  );
};

export default Input;
