import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
import { MoviesContext } from "../contexts/moviesContext";


const TrendingMovies = (props) => {

  const [trending, setMovies] = useState([]);
  const {trending: movieIds } = useContext(MoviesContext);


  useEffect(() => {
    getTrendingMovies().then(trending => {
      setMovies(trending);
    });
  }, []);

  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


return (
    <PageTemplate
      title='Trending Movies'
      movies={trending}
      action={(trending) => {
        return <AddToWatchListIcon movie={trending} />
      }}
    />
  );
}
  
  export default TrendingMovies;