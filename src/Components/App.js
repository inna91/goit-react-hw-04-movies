import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import Loader from '../Components/Loader/Loader';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';

const HomeView = lazy(() =>
  import('../views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import(
    '../views/MoviesView/MoviesView' /* webpackChunkName: "movies-view" */
  ),
);
const MoviesDetailView = lazy(() =>
  import(
    '../views/MovieDetail/MovieDetailView' /* webpackChunkName: "movies-details-view" */
  ),
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

export default function App() {
  return (
    <div className={s.App}>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MoviesDetailView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3700} position="bottom-center" />
    </div>
  );
}
