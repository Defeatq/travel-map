import { useCallback, useEffect, useRef, useState } from 'react';
import Map, { LngLatBounds } from 'react-map-gl';

import token from '../../token'; // Mapbox token
import useStyles from './MapStyle';

import type { MapRef } from 'react-map-gl';

function OverviewMap() {
  const [bounds, setBounds] = useState<LngLatBounds>();
  const mapRef = useRef<MapRef>();
  
  const { classes } = useStyles();

  const onLoad = () => {
    setBounds(mapRef.current?.getBounds());
  }

  const onMoveEnd = () => {
    setBounds(mapRef.current?.getBounds());
  }

  useEffect(() => {
    console.log(bounds)
  }, [bounds])

  return (
    <Map
      ref={ mapRef }
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      mapboxAccessToken={ token }
      style={{width: '100%', height: '80vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onLoad={ onLoad }
      onMoveEnd={ onMoveEnd }
    />
  )
}

export default OverviewMap;
