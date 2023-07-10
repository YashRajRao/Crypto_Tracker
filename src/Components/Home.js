import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>

<Image w={"full"} h={"full"} objectFit={"cover"} src='https://img.freepik.com/free-vector/bitcoin-technology-concept-with-circuit-diagram_1419-2255.jpg?w=1380&t=st=1688746314~exp=1688746914~hmac=3dc965e7fa4040c14a3a365c05a68ba61daec6e8bae0be05439a1f5a8eb71cb8' />
<Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteALpha.700"} mt = {"-20"}></Text>
    </Box>
  )
}

export default Home
