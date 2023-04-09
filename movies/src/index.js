import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcoming";
import PeopleDetails from "./pages/peopleDetails";
import WatchListPage from "./pages/watchListPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMovies from "./pages/trendingMovies";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import ActorPage from "./pages/actorDetailsPage";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/person/:id" element={<ActorPage />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/watchList" element={<WatchListPage />} />
          <Route path="/movies/trendingMovies" element={<TrendingMovies />} />
          <Route path="/movies/peoplesDetails" element={<PeopleDetails />} />
          <Route path="/movies/login" element={<Login />} />
          <Route path="/movies/signUp" element={<SignUp />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);

