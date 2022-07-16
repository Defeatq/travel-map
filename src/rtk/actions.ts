import { createAction } from "@reduxjs/toolkit";
import { LngLatBounds } from "mapbox-gl";

const ACTION_NAMES = {
  SET_BOUNDS: 'SET_BOUNDS',
  SET_PLACES: 'SET_PLACES',
  SET_TYPE: 'SET_TYPE',
  SET_RATING: 'SET_RATING',
};

const setBounds = createAction<LngLatBounds | undefined>(ACTION_NAMES.SET_BOUNDS);
const setPlaces = createAction<object>(ACTION_NAMES.SET_PLACES);

const setType = createAction<string>(ACTION_NAMES.SET_TYPE);
const setRating = createAction<number>(ACTION_NAMES.SET_RATING);

export { ACTION_NAMES, setBounds, setPlaces, setType, setRating };
