import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

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


return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcoming}
      selectFavorite={addToFavorites}
    />
  );
}
  
  export default UpcomingMoviesPage;