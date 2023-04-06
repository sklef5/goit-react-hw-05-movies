import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainNav from './MainNav/MainNav';

const HomePage = lazy(() => import('./Page/HomePage/HomePage'));
const MoviePage = lazy(() => import('./Page/MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('./Page/MovieDetails/MovieDetails'));
const SearchBar = lazy(() => import('../components/Search/SearchBar'));
const Cast = lazy(() => import('../components/CastList/CastList'));
const Review = lazy(() => import('./ReviewList/ReviewList'));

const SharedLayout = () => {
  return (
    <>
      <MainNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

const App = () => {
  return (
<Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<HomePage />} />
    <Route path="movies" element={<MoviePage />}>
      <Route index element={ <Suspense fallback={<div>Loading...</div>}> <SearchBar /> </Suspense>  }/>
      <Route path=":movieId" element={ <Suspense fallback={<div>Loading...</div>}> <MovieDetails /> </Suspense> } >
        <Route path="cast"  element={ <Suspense fallback={<div>Loading...</div>}>  <Cast /> </Suspense> } />
        <Route path="reviews"  element={ <Suspense fallback={<div>Loading...</div>}>  <Review /> </Suspense> } />
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
</Routes>
  );
};
export default App;
