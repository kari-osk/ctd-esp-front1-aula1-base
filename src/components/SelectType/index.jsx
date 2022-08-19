import React from 'react'

function SelectType({
  options = [{ name: '', url: '' }],
  name,
  label,
  value,
  onChange = () => { },
  disabled = false,
  type = "text" }) {

  const onBlur = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-receptor">
      <label>{label}</label>
      <select
        className="select-type"
        type={type} id={name}
        onBlur={onBlur}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}

      </select>
    </div>
  )
}

export default SelectType
