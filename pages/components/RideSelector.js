import { Fira_Sans_Extra_Condensed } from 'next/font/google'
import React, {useEffect,useState} from 'react'
import { carList } from '../data/carList'
import tw from 'tailwind-styled-components'


const RideSelector = ({pickupCordinates,dropofCordinates}) => {
  const [rideDuration,setRideDuration]=useState(0);
  useEffect(()=>{
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCordinates[0]},${pickupCordinates[1]};${dropofCordinates[0]},${dropofCordinates[1]}?access_token=pk.eyJ1IjoiYXFzYTAxNSIsImEiOiJjbGllaGx2dzgwMW02M2RvMTFoMDI2ZWhuIn0.AZhpoBF3AnJiBViBg_i3hw`
    ).then(res=>res.json())
    .then(data =>{
      setRideDuration(data.routes[0].duration/100)
    })

  },[pickupCordinates,dropofCordinates]);

  return (
    <Wrapper>
       <Title>choose ride or swipeup for more  </Title>
       <CarList>
        {carList.map((car,index)=>(
            <Car key={index}>
            <CarImage src="https://www.nicepng.com/png/detail/210-2100906_ambulance-image-ambulance-icon-3d.png"/>
             <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 min away</Time>
            </CarDetails>
            <Price>{'Rs'+(rideDuration*car.multiplier).toFixed(2)}</Price>

        </Car>

        ))}
        
       </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper=tw.div`
flex-1
`
const Title=tw.div` 
text-center text-gray-500 text-small py-2 border-b
`
const CarDetails=tw.div`flex-1`
const CarList=tw.div`
`
const Car=tw.div`
flex p-4 items-center`
const CarImage=tw.img`mr-5 h-12`
const Service=tw.div`font-medium`
const Time=tw.div`text-xs text-blue-500`
const Price=tw.div`
text-sm`
