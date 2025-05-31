import { useId } from 'react';
import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';

function SearchBox() {
  const searchFieldID = useId();
  const dispatch = useDispatch();
  const handleSearch = ev => {
    dispatch(changeFilter(ev.target.value.toLowerCase()));
  };

  return (
    <>
      <div className={styles.searchBoxWrapper}>
        <label htmlFor={searchFieldID}>Find contacts by name</label>
        <input
          type="text"
          name="searchInput"
          id={searchFieldID}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchBox;
