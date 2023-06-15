import Image  from 'next/image'
import {useEffect,useState} from 'react'
import { Inter } from 'next/font/google'

//import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
//import  mapboxgl from '!mapbox-gl';
import Map from './components/Map'
import Head from './components/Header'
import Link from 'next/link'
import {auth} from '../firebase'
import {onAuthStateChanged,signOut} from 'firebase/auth'
import {useRouter} from 'next/router'




const inter = Inter({ subsets: ['latin'] })

//mapboxgl.accessToken='pk.eyJ1IjoiYXFzYTAxNSIsImEiOiJjbGllaGx2dzgwMW02M2RvMTFoMDI2ZWhuIn0.AZhpoBF3AnJiBViBg_i3hw'
export default function Home() {

  const[user,setUser]=useState(null)
  const router=useRouter()
  useEffect(()=>{
    return onAuthStateChanged(auth, user=>{
      if(user){
        setUser({
          name:user.displayName,
          photoUrl:user.photoURL,

        })
      }else{
        setUser(null)
        router.push('./log')
      }
    })
  },[])
 
  return (
    <>
    <Head/>
    {/*//https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg */}
    <Wrapper>
      <Map/>
      <ActionItem> 
      <Header>
       <Logo src={""}/> 
      <Profile>
        <Name>{user && user.name} </Name>
        <UserImage src={user && user.photoUrl} onClick={()=>signOut(auth)}

        />
      </Profile>
      </Header>
      <ActionButtons>
      <Link href="/search">
      <ActionButton>
      
        
        <ActionButtonImage src="./pics/plus-icon.png" />
      
        </ActionButton></Link>
        
       
      </ActionButtons>
      <Link href="/search">
      <InputButton src="./pics/hospital.png">Choose Hospital</InputButton>
      </Link>
      </ActionItem>
    </Wrapper>
    </>
  )
}

const InputButton=tw.div`
 h-2 bg-cyan-700 p-8 flex items-center mt-8 justify-center text-white my-6 mx-4 border-t-2 text-xl border-round hover:bg-cyan-600 
 `
const ActionButtonImage=tw.img`
h-3/5 rounded-full
`
const ActionButton=tw.div`
flex flex-1 m-1  items-center flex-col justify-center rounded-lg transform hover:scale-105 text-xl
rounded-full
`
const ActionButtons=tw.div`
flex  rounded-full justify-center
`
const Profile=tw.div`
flex items-center

`
const Name=tw.div`
mr-4 w-20 text-small
`
const UserImage=tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer

`
const Logo=tw.img`h-28`
const Wrapper= tw.div` 
flex flex-col bg-red-400 h-screen`


const ActionItem=tw.div`
flex-1 p-4 bg-white
`
const Header= tw.div  `
flex justify-between items-center 
`
