import React from "react";
import PageTemplate from '../components/templatePeoplePage'
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPersonDetails } from "../api/tmdb-api";


const PeopleDetails = (props) => {

const {data, error, isLoading, isError} = useQuery('person', getPersonDetails)

if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const Actors = data.results;
console.log(Actors)

  return (
    <PageTemplate
      title='Actors Details'
      people={Actors}
    />
  );
}

export default PeopleDetails;