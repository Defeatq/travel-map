import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  AppBar, 
  Autocomplete, 
  Box, 
  TextField, 
  Toolbar, 
  Typography 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './HeaderStyle';
import { setAutocompleteResultsAsync } from '../../rtk/async-actions';
import { RootState, AppDispatch } from '../../rtk/store';

function Header() {
  const [value, setValue] = useState<string>('');
  const autoCompleteResults = useSelector((state: RootState) => state.autocomplete.results);
  const loadin = useSelector((state: RootState) => state.autocomplete.loading);
  const dispatch = useDispatch<AppDispatch>();

  const { classes } = useStyles();

  useEffect(() => {
    // uncomment this when you're gonna use or test the app

    // dispatch(setAutocompleteResultsAsync(value));
  }, [value]);

  useEffect(() => {
    console.log(autoCompleteResults);
  }, [autoCompleteResults]);

  useEffect(() => {
    console.log(loadin);
  }, [loadin]);

  return (
    <AppBar position="static">
      <Toolbar className={ classes.toolbar }>
        <Typography variant="h5" className={ classes.title }>
          Travel Advisor
        </Typography>
        <Box display="flex" alignItems="center" >
          <Typography variant="h6" className={ classes.title }>
            Explore new places
          </Typography>
          <div className={ classes.search }>
            <div className={ classes.searchIcon }>
              <SearchIcon />
            </div>
            <Autocomplete
              freeSolo
              disableClearable
              options={ 
                autoCompleteResults.map((option: { 
                  text?: string, 
                  detailsV2?: { names?: { name?: string, } } 
                }) => 
                  option.text ? option.text : option?.detailsV2?.names?.name
                ) 
              }
              renderInput={ (params) => (
                <TextField
                  { ...params }
                  value={ value }
                  onChange={ (event) => setValue(event.target.value) }
                  placeholder="Search..." 
                  label="" 
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    className: classes.searchInput,
                    classes: { 
                      focused: classes.inputFocused,
                      root: classes.inputOutlineRoot,
                    } }}
                />
              ) }
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
