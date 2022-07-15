import getUrlBoundsList from "../api-requests/URLS";
import { setPlaces } from "./actions";
import { AppDispatch } from "./store";
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
      const response = await fetch(getUrlBoundsList(bounds), options);
      const json = await response.json();
      dispatch(setPlaces(json.data));
    } catch(error) {
      console.log(error);
    }
  }
}

export default setPlacesAsync;
