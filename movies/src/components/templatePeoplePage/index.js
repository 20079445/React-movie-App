import React, { useState } from "react";
import Header from "../headerPeopleList";
import FilterCard from "../filterPeopleCard";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";

function PeopleListPageTemplate({ people, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [idFilter, setIdFilter] = useState("0");
  const Id = Number(idFilter);

  let displayedPeople = people
    .filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((a) => {
      return Id > 0 ? a.Id.includes(Id) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setIdFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header name={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            idFilter={idFilter}
          />
        </Grid>
        <PeopleList action={action} people={displayedPeople}></PeopleList>
      </Grid>
    </Grid>
  );
}
export default PeopleListPageTemplate;