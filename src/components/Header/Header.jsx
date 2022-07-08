import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'>
          Travel Advisor
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
