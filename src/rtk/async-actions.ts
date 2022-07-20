import { getUrlBoundsList, getAutoCompleteUrl } from "../api-requests/URLS";
import { 
  setLoading, 
  setPlaces, 
  setAutoCompleteResults,
} from "./actions";
import store, { AppDispatch } from "./store";
import options from '../api-requests/options';

interface Bounds {
  bl_latitude: number,
  bl_longitude: number,
  tr_longitude: number,
  tr_latitude: number,
}

function setPlacesAsync(bounds: Bounds) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setLoading(!store.getState().fetching.isLoading));

      const response = await fetch(getUrlBoundsList(bounds), options);
      const json = await response.json();
      dispatch(setPlaces(json.data));
      
      dispatch(setLoading(!store.getState().fetching.isLoading));
    } catch(error) {
      console.log(error);
    }
  }
}

function setAutocompleteResultsAsync(text: string) {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await fetch(getAutoCompleteUrl(text), options);
      const json = await response.json();
      dispatch(setAutoCompleteResults(json.data.Typeahead_autocomplete.results));
    } catch(error) {
      console.log(error);
    }
  }
}

export {
  setPlacesAsync,
  setAutocompleteResultsAsync,
};
