import PropTypes from 'prop-types';
import * as C from "./style";

const Input = ({ type, placeholder, value, onChange, onBlur }) => {
  return (
    <C.Input
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string, 
  placeholder: PropTypes.string, 
  value: PropTypes.string, 
  onChange: PropTypes.func.isRequired, 
  onBlur: PropTypes.func, 
};

export default Input;
