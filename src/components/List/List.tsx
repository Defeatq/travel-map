import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import useStyles from "./ListStyle";

function List() {
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');

  const { classes } = useStyles();

  return (
    <div className={ classes.details }>
      <Typography variant="h5">
        Food & Dining around you
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Type</InputLabel>
        <Select value={ type } onChange={ (event: SelectChangeEvent) => setType(event.target.value) } label="Type">
          <MenuItem value={ 'restaurants' }>Restaurants</MenuItem>
          <MenuItem value={ 'hotels' }>Hotels</MenuItem>
          <MenuItem value={ 'attractions' }>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Rating</InputLabel>
        <Select value={ rating } onChange={ (event: SelectChangeEvent) => setRating(event.target.value) } label="Rating">
          <MenuItem value={ 0 }>All</MenuItem>
          <MenuItem value={ 3 }>Above 3.0</MenuItem>
          <MenuItem value={ 4 }>Above 4.0</MenuItem>
          <MenuItem value={ 4.5 }>Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default List;
