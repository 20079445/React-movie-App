import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import PublicIcon from '@mui/icons-material/Public';
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import CakeIcon from '@mui/icons-material/Cake';


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip
          icon={<PublicIcon />}
          label={`${actor.place_of_birth.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${actor.known_for_department} (${actor.popularity}`}
        />
        <Chip 
        icon={<CakeIcon />}
        label={`Birthday: ${actor.birthday}`} />
      </Paper>
      <Paper component="ul" sx={{...root}}>
      <li>
      <Chip label="Also known as:" sx={{...chip}} color="primary" />
      </li>
      {actor.also_known_as.map((g) => (
        <li key={g.also_known_as}>
          <Chip label={g.also_known_as} sx={{...chip}} />
        </li>
      ))}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>

      </>
  );
};
export default ActorDetails ;