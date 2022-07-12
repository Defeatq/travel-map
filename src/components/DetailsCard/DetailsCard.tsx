import { Typography } from "@mui/material";

interface Card {
  place: {
    name: string,
  },
}

function DetailsCard( props: Card ) {
  const { place } = props;

  return (
    <Typography variant="h4">
      { place.name }
    </Typography>
  )
}

export default DetailsCard;
