import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
import { MoviesContext } from "../contexts/moviesContext";


const UpcomingMoviesPage = (props) => {

  const [upcoming, setMovies] = useState([]);
  const {upcoming: movieIds } = useContext(MoviesContext);


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
  const Movies = data.results;

  // const addToWatchList = Movies.filter(m => m.addToWatchList)
  // localStorage.setItem('watchList', JSON.stringify(addToWatchList))

return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcoming}
      action={(upcoming) => {
        return <AddToWatchListIcon movie={upcoming} />
      }}
    />
  );
}
  
  export default UpcomingMoviesPage;