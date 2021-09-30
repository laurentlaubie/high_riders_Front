import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

// dans un dustructuring on peut récuperer des choses puis récupérer
// tout le reste via le rest parameter qui s'écrit ...
const Input = ({ inputKey, ...props }) => {
  const value = useSelector((state) => state[inputKey]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE',
      newValue: event.target.value,
      key: inputKey,
    });
  };
  return (
    <input
      className="input"
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

Input.propTypes = {
  inputKey: PropTypes.string.isRequired,
};

export default Input;
