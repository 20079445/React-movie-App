import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'



const UpcomingMoviesPage = (props) => {

  const [upcoming, setMovies] = useState([]);
  const favorites = upcoming.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = upcoming.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };


  useEffect(() => {
    getUpcomingMovies().then(upcoming => {
      setMovies(upcoming);
    });
  }, []);

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcoming}
      selectFavorite={addToFavorites}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
}
  
  export default UpcomingMoviesPage;