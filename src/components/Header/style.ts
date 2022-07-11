import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: '0px 10px',
  },
  title: {
    padding: '0px 15px',
  }
});

export default useStyles;
