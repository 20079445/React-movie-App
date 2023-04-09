import React from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getPersonDetails } from "../../api/tmdb-api";

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterpeopleCard(props) {

  const { data, error, isLoading, isError } = useQuery("credits", getPersonDetails);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  // const id = data.id;
  // if (id[0].name !== "All"){
  //   id.unshift({ id: "0", name: "All" });
  // }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleCreditChange = (e) => {
    handleChange(e, "credit", e.target.value);
  };



  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the actors.
        </Typography>
        <TextField
          sx={{...formControl}}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
    />

        <FormControl sx={{...formControl}}>
          <InputLabel id="credit-label">Actors</InputLabel>
          <Select
            labelId="credit-label"
            id="credit-select"
            defaultValue=""
            value={props.creditFilter}
            onChange={handleCreditChange}
  >

            {data.results.map((id) => {
              return (
                <MenuItem key={id.id} value={id.id}>
                  {id.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}