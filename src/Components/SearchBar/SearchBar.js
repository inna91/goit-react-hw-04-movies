import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SearchBar.module.css';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter anything to search');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className="SearchForm-button-label">
            <ImSearch />{' '}
          </span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="What film do you want to search"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
