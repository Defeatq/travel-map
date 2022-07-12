import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import useStyles from "./ListStyle";

import DetailsCard from '../DetailsCard/DetailsCard';

function List() {
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');

  const { classes } = useStyles();

  const places = [
    {name: 'nice'},
    {name: 'cool'},
    {name: 'great'},
    {name: 'good'},
    {name: 'nice'},
    {name: 'cool'},
    {name: 'great'},
    {name: 'good'},
    {name: 'nice'},
    {name: 'cool'},
    {name: 'great'},
    {name: 'good'},
    {name: 'nice'},
    {name: 'cool'},
    {name: 'great'},
    {name: 'good'},
  ];

  return (
    <div className={ classes.details }>
      <Typography variant="h5">
        Food & Dining around you
      </Typography>
      <div className={ classes.detailsSelect }>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={ classes.detailsForm }>
          <InputLabel>Type</InputLabel>
          <Select value={ type } onChange={ (event: SelectChangeEvent) => setType(event.target.value) } label="Type">
            <MenuItem value={ 'restaurants' }>Restaurants</MenuItem>
            <MenuItem value={ 'hotels' }>Hotels</MenuItem>
            <MenuItem value={ 'attractions' }>Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={ classes.detailsForm }>
          <InputLabel>Rating</InputLabel>
          <Select value={ rating } onChange={ (event: SelectChangeEvent) => setRating(event.target.value) } label="Rating">
            <MenuItem value={ 0 }>All</MenuItem>
            <MenuItem value={ 3 }>Above 3.0</MenuItem>
            <MenuItem value={ 4 }>Above 4.0</MenuItem>
            <MenuItem value={ 4.5 }>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={ 3 } className={ classes.list }>
        { places?.map((place, i) => <Grid item xs={ 12 }> <DetailsCard key={ i } place={ place } /> </Grid>) }
      </Grid>
    </div>
  )
}

export default List;
