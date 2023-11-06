import PropTypes from 'prop-types';
import * as C from "./style";

const Button = ({ Text, onClick, Type = "button", disabled }) => {
  return (
    <C.Button
      style={{ backgroundColor: disabled ? "#DCDCDC" : "#046ee5" }}
      disabled={disabled}
      type={Type}
      onClick={onClick}
    >
      {Text}
    </C.Button>
  );
}

Button.propTypes = {
  Text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  Type: PropTypes.string, 
  disabled: PropTypes.bool, 
};

export default Button;
