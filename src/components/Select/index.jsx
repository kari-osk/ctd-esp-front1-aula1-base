import React from 'react'

function Select({ options, name, label, value, onChange, type = "text" }) {

  const onBlur = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <select type={type} id={name} onBlur={onBlur} >
        {options.map((option) => (
          <div key={option.name}>{option.name}</div>
        ))}
      </select>
    </div>
  )
}

export default Select
