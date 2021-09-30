import { useSelector, useDispatch } from 'react-redux';

import { changeUserSearch } from 'src/actions/search';

const search = () => {
  const userSearch = useSelector((state) => state.search.userSearch);
  const dispatch = useDispatch();
  const changeField = (event) => {
    dispatch(changeUserSearch(event.target.value));
  };
  return (
    <input
      className="header__input"
      value={userSearch}
      onChange={changeField}
    />
  );
};

export default search;
