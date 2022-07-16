import { 
  Box, 
  FormControl, 
  Grid, 
  InputLabel, 
  MenuItem, 
  Select, 
  SelectChangeEvent, 
  Typography 
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../../rtk/store";
import { setRating, setType } from "../../rtk/actions";

import useStyles from "./ListStyle";
import DetailsCard from '../DetailsCard/DetailsCard';

function List() {
  const dispatch = useDispatch<AppDispatch>();
  const places = useSelector((state: RootState) => state.places);
  const type = useSelector((state: RootState) => state.filters.type);
  const rating = useSelector((state: RootState) => state.filters.rating);

  const { classes } = useStyles();

  return (
    <div className={ classes.details }>
      <Typography variant="h5">
        Food & Dining around you
      </Typography>
      <div className={ classes.detailsSelect }>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={ classes.detailsForm }>
          <InputLabel>Type</InputLabel>
          <Select value={ type } onChange={ (event: SelectChangeEvent) => dispatch(setType(event.target.value)) } label="Type">
            <MenuItem value={ 'restaurants' }>Restaurants</MenuItem>
            <MenuItem value={ 'hotels' }>Hotels</MenuItem>
            <MenuItem value={ 'attractions' }>Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={ classes.detailsForm }>
          <InputLabel>Rating</InputLabel>
          <Select value={ rating } onChange={ (event: SelectChangeEvent<number>) => dispatch(setRating(event.target.value as number)) } label="Rating">
            <MenuItem value={ 0 }>All</MenuItem>
            <MenuItem value={ 3 }>Above 3.0</MenuItem>
            <MenuItem value={ 4 }>Above 4.0</MenuItem>
            <MenuItem value={ 4.5 }>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={ 3 } className={ classes.list }>
        { places?.map((place, i) => <Grid key={ i } item xs={ 12 }> <DetailsCard place={ place } /> </Grid>) }
      </Grid>
    </div>
  )
}

export default List;
