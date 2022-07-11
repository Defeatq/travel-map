import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  searchIcon: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5px',
    pointerEvents: 'none',
  },
  search: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    maxHeight: '40px',
    padding: '0px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: '0.3s',
  },
  inputFocused: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transition: '0.3s',
  },
  title: {
    padding: '0px 15px',
  }
});

export default useStyles;
