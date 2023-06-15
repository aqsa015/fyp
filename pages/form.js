import React from 'react'
import tw from 'tailwind-styled-components'
import Image from 'next/image'

const form = () => {
  return (
    
    <Wrapper>
        
        <Logo src='./pics/signup.png'/>
        <InputItems>
        <Input placeholder='Name'/>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <Input placeholder='Address'/>
        <Input placeholder='Contact'/>
        <Input placeholder='Emergency Contact'/>
        <Input placeholder='CNIC'/>
        
        <Button>Confirm</Button>

        </InputItems>
        
        

         </Wrapper>
        
         
  )
}

export default form
const Frm=tw.div`flex flex-col`
const Wrapper=tw.div` flex flex-col bg-cyan-600 h-screen`
const Logo =tw.img`
flex flex-col object-contain self-center pt-3 `
const InputItems=tw.div`
flex flex-col flex-1 px-40 my-4`
const Input=tw.input`h-8 bg-white my-2 rounded-2 p-4 outline-none border-none
text-center text-black`
const Button=tw.button`pl-6 bg-cyan-800 rounded-full w-30 text-xl p-4 m-4  hover:bg-cyan-900 hover:text-white
 
`

