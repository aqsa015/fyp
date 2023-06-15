import {useEffect,useState} from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'



const confirm = () => {
    const router=useRouter()
    const { pickup,dropof}=router.query
    console.log("pickup : ",pickup)
    console.log("dropof : ",dropof)
    const [PickupCordinates,setPickupCordinates]=useState([0,0])
    const [DropofCordinates,setDropofCordinates]=useState([0,0])


    const getPickupCordinates=(pickup
      
        )=>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiYXFzYTAxNSIsImEiOiJjbGllaGx2dzgwMW02M2RvMTFoMDI2ZWhuIn0.AZhpoBF3AnJiBViBg_i3hw",
            limit:1
        })
         )
        .then(response=>response.json())
        .then(data =>{
            
         setPickupCordinates(data.features[0].center);
        })
    }
    const getDropofCordinates =(dropof)=>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropof}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiYXFzYTAxNSIsImEiOiJjbGllaGx2dzgwMW02M2RvMTFoMDI2ZWhuIn0.AZhpoBF3AnJiBViBg_i3hw",
            limit:1
        })
         )
        .then(response=>response.json())
        .then(data =>{
            
            setDropofCordinates(data.features[0].center);
        })

    }
    useEffect(()=>{
        getPickupCordinates(pickup);
        getDropofCordinates (dropof);

    },[pickup,dropof])
  return (
    <Wrapper>
        <Link href="/search">
        <ButtonContainer>
        
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
        </Link>
       { /*<ButtonContainer>
            <Link  href="/search" >
            <BackButton href="https://img.icon8.com/ios-filled/50/000000/left.png"/>
       </Link>

            
            <Link href="/search">
        <ButtonContainer>
        
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
        </Link>

            //
  </ButtonContainer>*/}

        <Map
        pickupCordinates={PickupCordinates}
        dropofCordinates={DropofCordinates}
        
        />
        <RideContainer>
           <RideSelector
            pickupCordinates={PickupCordinates}
            dropofCordinates={DropofCordinates}
           
           />
           <ConfirmButtonContainer>
            <ConfirmButton>
                Confirm Ride
            </ConfirmButton>
           </ConfirmButtonContainer>
        </RideContainer>
    </Wrapper>
  )
}

export default confirm
const ConfirmButton=tw.div`
bg-black text-white text-center my-4 mx-4 text-xl`

const ConfirmButtonContainer=tw.div`
border-t-2
`
const Wrapper=tw.div`
flex h-screen flex-col
`
const RideContainer=tw.div`
flex-1 flex flex-col  bg-white
`
const ButtonContainer= tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer `
const BackButton=tw.img`
h-full object-contain`