
import axios from "axios";
import { server} from "../index"
import { useEffect, useState } from "react";
import { Container, HStack, Text,Image,VStack,Heading} from "@chakra-ui/react"
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
 
 const [exchanges,setexchanges] = useState([]);
 const [loading,setloading] = useState(true);
 const [Error,setError] = useState(false);

  useEffect(()=>{
    const fetchExchanges = async () =>{
    
    try {
      const {data} = await axios.get(`${server}/exchanges`)
      setexchanges(data)
      setloading(false)
    } catch (error) {
      setError(true);
      setloading(false);
    }
    }
    fetchExchanges()
  }, [])

  if(Error) return <ErrorComponent message={"Error While Fetching Exchanges"}/>
  return (
   
    <Container maxW={"container.xl"}>

    {loading? <Loader/> : (
<>
<HStack wrap={"wrap"} justifyContent={"space-evenly"}>
  {
    exchanges.map(i=>(
      <ExchangesCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
    ))
  }
</HStack>
</>

    )}

    </Container>
  )
};

const ExchangesCard = ({name,img,rank,url})=>(
  <a href={url} target="blank">

  <VStack w={"52"} shadow={"lg"} p={"9"} borderRadius={"lg"} transition={"all 0.3s"}
  m={"4"} 
  css={{

"&:hover":{
  transform:"scale(1.1)",
},
  }}>

    <Image src={img} w={"10"} h={"10"} objectFit={"contain"}/>

    <Heading size={"md"} noOfLines={1}>{rank}</Heading>
    <Text noOfLines={1}>{name}</Text>
  </VStack>

  </a>
)

export default Exchanges
