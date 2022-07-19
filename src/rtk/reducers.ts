import { createReducer } from "@reduxjs/toolkit";
import { LngLatBounds } from "mapbox-gl";

import { 
  setBounds, 
  setLoading, 
  setPlaces, 
  setRating, 
  setType 
} from "./actions";

const initialState = {
  bounds: LngLatBounds,
  places: [],
  filters: {
    type: 'restaurants',
    rating: 0.0,
  },
  fetching: {
    isLoading: false,
  }
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
    .addCase(setType, (state, action) => {
      const newPlaceType = action.payload;

      state.filters.type = newPlaceType;
    })
    .addCase(setRating, (state, action) => {
      const newRatingAbove = action.payload;

      state.filters.rating = newRatingAbove;
    })
    .addCase(setLoading, (state, action) => {
      const loading = action.payload;

      state.fetching.isLoading = loading;
    })
);

export default coordinatesReducer;
