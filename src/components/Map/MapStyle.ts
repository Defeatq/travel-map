import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (_theme) => ({
    map: {
      width: '100%',
      height: '80vh',
    }
  })
);

export default useStyles;
