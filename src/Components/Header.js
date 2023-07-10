import { HStack, Button , Image } from '@chakra-ui/react'
import {Link} from "react-router-dom"
 import React from 'react'
 import {SearchIcon} from '@chakra-ui/icons'
const Header = () => {
  return (
    <HStack p={"5"} shadow={"lg"} bgColor={"#101010"} pos={"relative"} >

      <Button variant={"unstyled"} color={"white"} ml={"10"} >
        <Link to = "/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} ml={"6"}>
        <Link to = "/Exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} ml={"5"}>
        <Link to = "/Coins">Coins</Link>
      </Button>
      
     <SearchIcon color={"white"}  position="absolute"right={"15%"}/>

    <HStack p={"1"}>
    <Image   width="13%" height={10} objectFit={"cover"} src='https://cdn.dribbble.com/users/8181009/screenshots/16289208/media/b9e35a1a85c02ce36a8338c28436a320.jpg?compress=1&resize=400x300&vertical=center' position="absolute" left ="86%" />
    </HStack>
    </HStack>
  )
}

export default Header
