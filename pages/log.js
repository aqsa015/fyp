import React,{useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Images from 'next/image'
import { useRouter } from 'next/router'
//import { signInWithPopup } from 'firebase/auth'
import {signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import {auth,provider} from '../firebase'

const log = () => {
    const router= useRouter()
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                router.push('/')
            }
        })
    },[]);
  return (
    <Wrapper>
        <Logo src='./pics/Vector.png'/>
        <Access>Do You Have An Account With us  ?</Access>
        <Button>
        <SignInButton onClick={()=>signInWithPopup(auth,provider)}> SignIn</SignInButton>
        <SignupButton>Signup</SignupButton>
        </Button>
    </Wrapper>
  )
}

export default log
const Wrapper=tw.div`
 flex flex-col bg-cyan-600 h-screen`
const Logo=tw.img` 
flex flex-col object-contain self-center pt-20  
`
const Access =tw.div` p-6 bg-white  m-6 text-center text-xl self-center  rounded-lg `
const SignInButton=tw.button`
 pl-6 bg-cyan-300 rounded-full w-30 text-xl p-4 m-4  hover:bg-cyan-900 hover:text-white

 `
const Button=tw.div`flex-1 self-center`
const SignupButton=tw.button` 
  pl-6 bg-cyan-300 m-4 rounded-full w-30 text-xl p-4 hover:bg-cyan-900 hover:text-white`