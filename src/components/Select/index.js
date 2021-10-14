import PropTypes from 'prop-types';

import './style.scss';

const Select = ({
  value,
  name,
  data,
  placeholder,
  onChange,
  brutData,
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
        <option value="">{brutData}</option>
        {data.map((item) => (
          <option key={item.id || item.title} value={item.id || item.title}>{item.title}</option>
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
  brutData: PropTypes.string,
};

Select.defaultProps = {
  value: 1,
  brutData: '',
};

export default Select;
