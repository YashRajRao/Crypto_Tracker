import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Foter = () => {
  return (
   <Box bgColor={"#101010"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]} >


<Stack direction={["column","row"]} h={"full"} alignItems={"center"}>

<VStack w={"full"} alignItems={["center","flex-start"]}>

<Text fontWeight={"bold"} > About Us</Text>
<Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto trading app in india,we provide our guidance at a very cheap price</Text>

</VStack>
    <VStack>
        <Avatar  boxSize={"28"} mt={["4","0"]} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1501016658/hdw3xgfgjew8yvffpxzc.jpg" />
        <Text>Our Founder</Text>
    </VStack>
</Stack>
   </Box>
  )
}

export default Foter
