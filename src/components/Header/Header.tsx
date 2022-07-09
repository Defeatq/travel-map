import { AppBar, Autocomplete, Box, TextField, Toolbar, Typography } from '@mui/material';

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

            </div>
            <TextField label="Search" variant="outlined" sx={{
              '& legend': { display: 'none', },
              '& fieldset': { top: 0 },
            }}/>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
