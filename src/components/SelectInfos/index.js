import PropTypes from 'prop-types';

import './style.scss';

const SelectInfos = ({
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
          <option key={item.id || item.title} value={item.title || item.id}>{item.title}</option>
        ))}
      </select>

      <label htmlFor={selectId} className="select-label">
        {placeholder}
      </label>
    </div>
  );
};

SelectInfos.propTypes = {
  value: PropTypes.string,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectInfos.defaultProps = {
  value: 1,
};

export default SelectInfos;
