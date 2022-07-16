import { CSSProperties, useEffect, useMemo, useRef } from 'react';
import Map from 'react-map-gl';

import token from '../../token'; // Mapbox token
import { setBounds } from '../../rtk/actions';
import { RootState, AppDispatch } from '../../rtk/store';
import useStyles from './MapStyle';

import { MapRef, Marker } from 'react-map-gl';
import { useDispatch, useSelector, useStore } from 'react-redux';
import setPlacesAsync from '../../rtk/async-actions';

function OverviewMap() {
  const mapRef = useRef<MapRef>();
  // const store = useStore<RootState>();
  const dispatch = useDispatch<AppDispatch>();
  const bounds = useSelector((state: RootState) => state.bounds);
  const places = useSelector((state: RootState) => state.places);

  const { classes } = useStyles();

  const markers = useMemo(() => 
  places?.map((place, i) =>
    <Marker 
      key={ i } 
      longitude={ place.longitude ? place?.longitude : 0 } 
      latitude={ place.latitude ? place?.latitude : 0 } 
      anchor="bottom"
    >
      <img src={ place.photo ? place?.photo?.images?.large?.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'  } className={ classes.marker }/>
    </Marker>
  )
, [places]);

  const onChange = () => {
    dispatch(setBounds(mapRef.current?.getBounds()));
  };

  useEffect(() => {
    const isRendered = (bounds._ne) as boolean;

    if (isRendered) {
      console.log(bounds);

      // Uncomment this when you're gonna use or test the app

      // dispatch<AppDispatch>(setPlacesAsync({
      //   bl_latitude: bounds?._sw.lat,
      //   bl_longitude: bounds?._sw.lng,
      //   tr_longitude: bounds?._ne.lng,
      //   tr_latitude: bounds?._ne.lat,
      // }));
    }
  }, [bounds]);

  return (
    <Map
      ref={ mapRef }
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
        bearing: 0,
        pitch: 0,
      }}
      mapboxAccessToken={ token }
      style={{width: '100%', height: '85vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onLoad={ onChange }
      onMoveEnd={ onChange }
    >
      { markers }
    </Map>
  )
}

export default OverviewMap;
