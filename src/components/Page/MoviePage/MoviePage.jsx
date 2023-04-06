import { SearchBar } from '../../Search/SearchBar';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { findMovies } from '../../service/API';
import {ListMovie} from '../../ListMovie/ListMovie'

 const MoviePage = () => {
  return (
<>
  <Outlet/>
</>

  );
};
export default MoviePage