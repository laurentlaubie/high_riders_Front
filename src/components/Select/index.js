import PropTypes from 'prop-types';

import './style.scss';

const Select = ({
  value,
  name,
  data,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const selectId = `select-${name}`;

  return (
    <div className={value.length > 0 ? 'select select--has-content' : 'select'}>
      <select
        value={value}
        onChange={handleChange}
        id={selectId}
        className="select-input"
        name={name}
      >
        {data.map((item) => (
          <option key={item.id} value={item.id}>{item.title}</option>
        ))}
      </select>

      <label htmlFor={selectId} className="select-label">
        {placeholder}
      </label>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  value: 1,
};

export default Select;
