import { useSelector, useDispatch } from 'react-redux';

import Field from '../Field';

const Search = () => {
  const newSearch = useSelector((state) => state.search.newSearch);
  const dispatch = useDispatch();

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_SEARCH_ALL_VALUE',
      value: value,
      key: key,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'FETCH_SEARCH_ALL',
      searchedValue: newSearch,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="newSearch"
        placeholder="Rechercher sur tout le site"
        onChange={changeField}
        value={newSearch}
      />
    </form>
  );
};

export default Search;
