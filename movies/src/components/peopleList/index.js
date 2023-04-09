import React from "react";
import People from "../peopleCard";
import Grid from "@mui/material/Grid";

const PeopleList = ( {people, action }) => {
  let peopleCards = people.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <People key={a.id} people={a} action={action} />
    </Grid>
  ));
  return peopleCards;
};

export default PeopleList;