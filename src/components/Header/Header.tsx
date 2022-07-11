import { AppBar, Autocomplete, Box, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './style';

function Header() {
  const { classes } = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={ classes.toolbar }>
        <Typography variant="h5">
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography>
            Explore new places
          </Typography>
          <div className={ classes.search }>
            <div className={ classes.searchIcon }>
              <SearchIcon />
            </div>
            <TextField label="Search" variant="outlined" InputLabelProps={{ shrink: false, }}/>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
