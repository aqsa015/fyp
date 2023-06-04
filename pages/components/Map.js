import React from 'react'
import { useEffect } from 'react';
import tw from 'tailwind-styled-components'
import  mapboxgl from '!mapbox-gl';
mapboxgl.accessToken='pk.eyJ1IjoiYXFzYTAxNSIsImEiOiJjbGllaGx2dzgwMW02M2RvMTFoMDI2ZWhuIn0.AZhpoBF3AnJiBViBg_i3hw'

const Map = () => {
    useEffect(() => {
    
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [24.893753619537737, 67.08866786372316],
          zoom: 9,
        });
      });
  return (
    <Wrapper id='map'></Wrapper>
  )
}
const Wrapper= tw.div` 
flex-1
`

export default Map