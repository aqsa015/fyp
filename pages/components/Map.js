import React from 'react'
import { useEffect } from 'react';
import tw from 'tailwind-styled-components'
import  mapboxgl from '!mapbox-gl';
mapboxgl.accessToken='pk.eyJ1IjoiYXFzYTAxNSIsImEiOiJjbGllaGx2dzgwMW02M2RvMTFoMDI2ZWhuIn0.AZhpoBF3AnJiBViBg_i3hw'

const Map = (props) => {
    useEffect(() => {
    
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [24.860742293870572,67.00509294077973],
          zoom:5,
        })
        
    if(props.pickupCordinates){
      addToMap(map,props.pickupCordinates)
    }
    if(props.pickupCordinates && props.dropupcordinates){
      map
    }

    if(props.dropofCordinates){
      addToMap(map,props.dropofCordinates)
    }
    if(props.pickupCordinates && props.dropofcordinates){
      map.fitBounds([
        props.dropofCordinates,
        props.pickupCordinates
      ],{padding:60}
      )

    }

      },[props.pickupCordinates,props.dropofCordinates]);
      const addToMap=(map,cordinates) =>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat(cordinates)
        .addTo(map);
      }
       return (
    <Wrapper id='map'></Wrapper>
  )
}
const Wrapper= tw.div` 
flex-1 h-1/2
`

export default Map