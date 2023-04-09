import { Link } from "react-router-dom";
import React, {  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';


export default function PeopleCard({ people, action }) {

  people.favorite = true;

  return (
    <Card sx={{ maxWidth: 345 }}>
            <CardHeader
        avatar={
          people.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {people.id}{" "}
          </Typography>
        }
      />

      <CardMedia
        sx={{ height: 500 }}
        image={
          people.profile_path
            ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {people.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {people.known_for_department}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
        <CardActions disableSpacing>
        <Link to={`/person/${people.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        </CardActions>
    </Card>
  );
}


