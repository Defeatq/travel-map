import { AppBar, Autocomplete, Box, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './style';

function Header() {
  const { classes } = useStyles();

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
            <TextField placeholder="Search..." label="" variant="outlined" InputProps={{ className: classes.searchInput, }}/>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
