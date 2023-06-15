import {useState} from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const search = () => {

  const[pickup,setPickup]=useState("");
  const[dropof,setDropof]=useState("");
  return (
    
    <Wrapper>
        {/*button container */}
        <Link href="/">
        <ButtonContainer>
        
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
        </Link>
        {/*input container */}
        <InputContainer>
        <FromToIcons>
           {/* <Circle src="https://img.icon8.com/ios-filled/50/9CA3AF/filled-circle.png"/>  */}
            
           <Circle src="https://www.pngitem.com/pimgs/m/114-1146788_light-gray-circle-transparent-hd-png-download.png"/>
           {/* <Line src="https://img.icon8.com/ios/50/9CA3AF/vertical-line.png"/>  */}
            <Line src="https://t3.ftcdn.net/jpg/03/63/34/70/360_F_363347020_YzZc2x3LI8fTfVXvGVPTXTrkOAJ1MR4l.jpg"/>
           
           
            <Square src='https://static.vecteezy.com/system/resources/previews/001/209/957/original/square-png.png'/>
        </FromToIcons>
        <InputBoxes> 
        <Input placeholder='enter pickup location'
        value={pickup}
        onChange={(e)=>setPickup(e.target.value)}/>
        <Input placeholder='where to? '
        value={dropof}
        onChange={(e)=>setDropof(e.target.value)}

        />
        </InputBoxes>
        <PlusIcon src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png"/>
        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://static.vecteezy.com/system/resources/previews/008/891/115/original/black-line-star-outline-illustration-on-white-background-free-vector.jpg" />Saved Places


        </SavedPlaces>
        <Link href={{
          pathname:'/confirm',
          query:{
            pickup:pickup,
            dropof:dropof
          }
        }}>
        <ConfirmButon>Confirm Location</ConfirmButon>
        </Link>
        {/*saved places */}
        {/*confirm location */}






    </Wrapper>
    
  )
}

export default search

const ConfirmButon=tw.div`
flex bg-black text-white items-center mt-2 p-3 justify-center rounded-lg transform hover:scale-105 
`
const SavedPlaces=tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon=tw.img`
bg-gray-400 h-11 w-15 m p-2 rounded-full mr-2
`
const Wrapper=tw.div`
bg-gray-200 h-screen
`
const ButtonContainer=tw.div`
bg-white px-4
`
const BackButton=tw.img`
h-12
`
const FromToIcons=tw.div`
w-10 flex flex-col mr-2 mb-2 items-center
`
const InputContainer=tw.div`
bg-white flex items-center px-4 mb-2
`
const Circle=tw.img`
mr-2 mt-2 h-3 
`
const Line=tw.img`
mr-2 h-19
`
const Square=tw.img`
mr-2 h-3
`
const InputBoxes=tw.div` 
flex flex-col flex-1
`
const Input=tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon=tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`