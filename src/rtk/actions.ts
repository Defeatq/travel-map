import { createAction } from "@reduxjs/toolkit";
import { LngLatBounds } from "mapbox-gl";

const ACTION_NAMES = {
  SET_BOUNDS: 'SET_BOUNDS',
  SET_PLACES: 'SET_PLACES',
};

const setBounds = createAction<LngLatBounds | undefined>(ACTION_NAMES.SET_BOUNDS);
const setPlaces = createAction<object>(ACTION_NAMES.SET_PLACES);

export { ACTION_NAMES, setBounds, setPlaces };
