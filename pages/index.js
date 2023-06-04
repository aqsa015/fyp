import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect} from 'react'
//import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
//import  mapboxgl from '!mapbox-gl';
import Map from './components/Map'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

//mapboxgl.accessToken='pk.eyJ1IjoiYXFzYTAxNSIsImEiOiJjbGllaGx2dzgwMW02M2RvMTFoMDI2ZWhuIn0.AZhpoBF3AnJiBViBg_i3hw'
export default function Home() {

  
 
  return (
    <>
    
    <Wrapper>
      <Map/>
      <ActionItem> 
      <Header>
       <Logo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg "/> 
      <Profile>
        <Name>Aqsa Zulfiqar </Name>
        <UserImage src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg'

        />
      </Profile>
      </Header>
      <ActionButtons>
      <Link href="/search">
      <ActionButton>
      
        
        <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
        Ride
        </ActionButton></Link>
        
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
          2-Wheels</ActionButton>
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
          Result</ActionButton>
      </ActionButtons>
      
      <InputButton>Where To?</InputButton>
      </ActionItem>
    </Wrapper>
    </>
  )
}

const InputButton=tw.div`
 h-20 bg-gray-200 p-4 flex items-center mt-8 justify-center
 `
const ActionButtonImage=tw.img`
h-3/5
`
const ActionButton=tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 text-xl

`
const ActionButtons=tw.div`
flex
`
const Profile=tw.div`
flex items-center

`
const Name=tw.div`
mr-4 w-20 text-small
`
const UserImage=tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`
const Logo=tw.img`h-28`
const Wrapper= tw.div` 
flex flex-col bg-red-400 h-screen`


const ActionItem=tw.div`
flex-1 p-4 bg-gray-500
`
const Header= tw.div  `
flex justify-between items-center
`
