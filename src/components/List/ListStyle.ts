import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(
  (_theme) => ({
    details: {
      padding: '25px',
    },
    detailsForm: {
      margin: _theme.spacing(1),
      minWidth: '120px',
    }
  })
);

export default useStyles;
