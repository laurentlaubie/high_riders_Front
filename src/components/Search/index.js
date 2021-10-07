import { useSelector, useDispatch } from 'react-redux';

import Field from '../Field';

const Search = () => {
  const newSearch = useSelector((state) => state.search.newSearch);
  const dispatch = useDispatch();

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_SPOT_VALUE',
      value: value,
      key: key,
    });
  };

  return (
    <form>
      <Field
        name="newSearch"
        placeholder="Rechercher sur tout le site"
        onChange={changeField}
        value={newSearch}
      />
      {/* <input
        className="header__input__input"
        value={userSearch}
        onChange={changeField}
      /> */}
    </form>
  );
};

export default Search;
