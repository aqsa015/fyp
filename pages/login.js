import React from 'react'
import tw from 'tailwind-styled-components'
import Images from 'next/image'
const Login = () => {
  return (
    <Wrapper>
        <Logo src='./pics/l2.jpeg'/>
        <Title >Log In To Access Your Account </Title>
        <HeadImage src ="./pics/hospital.png"/>
           <SignInButton>sign in with google </SignInButton> 
    </Wrapper>
  )
}

export default Login
const Wrapper=tw.div`h-screen p-4 
flex flex-col bg-white w-screen`
const SignInButton=tw.button`
bg-cyan-600 text-white text-xl text-center py-4 mt-8 self center w-full hover:bg-cyan-900`
const Logo=tw.img`
h-20 w-auto object-contain 
`
const Title= tw.div`text-black text-5xl pt-5 text-center`
const HeadImage=tw.img`
object-contain h-20 pt-2 
`