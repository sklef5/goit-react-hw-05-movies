import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { findMovies } from '../service/API';
import { ListMovie } from '../ListMovie/ListMovie';
import s from './SearchBar.module.scss';
import { Notify } from 'notiflix';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useSearchParams();
  const query = search.get('query');
  const [listMovies, setListMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ query: input });
    setInput('');
    
  };

  useEffect(() => {
    if (!query) return;
    findMovies(query)
      .then(data => setListMovies(data))
      .catch(err => {
        console.log(err)});
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          name="input"
          placeholder="Search..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit" className={s.button}>
          Find
        </button>
      </form>
      {listMovies && (
        <ul className={s.listItem}>
          {listMovies.map(item => {
            return <ListMovie key={item.id} title={item.title} id={item.id} />;
          })}
        </ul>
      )}
    </>
  );
};
export default SearchBar;
