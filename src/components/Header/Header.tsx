import { AppBar, Autocomplete, Box, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography>
            Explore new places
          </Typography>
          <div>
            <div>
              <SearchIcon />
            </div>
            <TextField label="Search" variant="outlined" InputLabelProps={{ shrink: false }}/>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
