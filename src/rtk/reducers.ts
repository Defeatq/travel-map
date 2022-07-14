import { createReducer } from "@reduxjs/toolkit";
import { LngLatBounds } from "mapbox-gl";

import { setBounds, setPlaces } from "./actions";

const initialState = {
  bounds: LngLatBounds,
  places: [],
}

const coordinatesReducer = createReducer(initialState, (builder) => 
  builder
    .addCase(setBounds, (state, action) => {
      Object.assign(state, {
        bounds: action.payload,
      })})
    .addCase(setPlaces, (state, action) => {
      Object.assign(state, {
        places: action.payload,
      })})
);

export default coordinatesReducer;
