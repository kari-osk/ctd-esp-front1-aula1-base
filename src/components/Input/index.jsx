import PropTypes from 'prop-types';

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


Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onBlur: PropTypes.func
}

export default Input;
