
import {Box,StatLabel,StatNumber,StatHelpText,Badge, Container, HStack, Radio, RadioGroup, VStack, Text, Image, Stat, StatArrow, Progress,Button} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import React from 'react'
import Loader from "./Loader";
import {useParams} from "react-router-dom"
import axios from "axios";
import { server} from "../index"
import ErrorComponent from "./ErrorComponent";
import Chart  from "./Chart";


const CoinDetails = () => {

  const params = useParams()
  const [coin,setcoin] = useState({});
  const [loading,setloading] = useState(true);
  const [Error,setError] = useState(false); 
  const [currency,setcurrency] = useState("inr");
  const [days,setdays] = useState("24h");
  const [chartArray,setchartArray] = useState([]);
  const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$s";

const btns=["24h","7d","14d","30d","60","200d","365d","max"]

 const switchChartStats =(key)=>{
switch (key) {
  case "24h":
    setdays("24h")
    setloading(true)
    break;

    case "7d":
      setdays("7d")
      setloading(true)
      break;
      case "14d":
        setdays("14")
        setloading(true)
        break;

        case "30d":
          setdays("30d")
          setloading(true)
          break;

          case "60d":
            setdays("60d")
            setloading(true)
            break;

            case "200d":
              setdays("200d")
              setloading(true)
              break;
              case "365d":
                setdays("365d")
                setloading(true)
                break;
                case "max":
                  setdays("max")
                  setloading(true)
                  break;
  default:
    setdays("7d")
      setloading(true)
    break;
}

 }

  useEffect(()=>{
    const fetchCoin = async () =>{
    
    try {
      const {data} = await axios.get(`${server}/coins/${params.id}`)
       const {data:chartdata}= await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
      console.log(data)
      setcoin(data)
      setchartArray(chartdata.prices)
      console.log(data)
      setloading(false)
    } catch (error) {
      setError(true);
      setloading(false);
    }
    }
    fetchCoin()
  },[params.id,currency,days])

  if(Error) return <ErrorComponent message={"Error While Fetching Coin"}/>



  return (
   <Container maxW={"xl"}>
{
  loading ? <Loader/> : (
    <>
<Box borderWidth={1} width={"full"}>

<Chart  arr = {chartArray}currency={currencySymbol} days={days}/>
</Box>

<HStack p="4" overflowX={"auto"}>
{
  btns.map((i)=>(
<Button key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
  ))
}
</HStack>

<RadioGroup  value={currency} onChange={setcurrency} p={"4"}>
  <HStack spacing={"4"}>
    <Radio value={"inr"}>INR</Radio>
     <Radio value={"usd"}>USD</Radio>
     <Radio value={"eur"}>EUR</Radio>
  </HStack>
</RadioGroup>

<VStack spacing={"4"} p="16" alignItems={"flex-start"}>

<Text fontSize={"small"} alignSelf="center" opacity={0.7}>
Last Update on {Date(coin.market_data.last_updated).split("G")[0]}

</Text>

<Image src={coin.image.large} w={"16"} h={"16"} objectPosition={"contain"}/>

<Stat>
<StatLabel>{coin.name}</StatLabel>
<StatNumber>
{currencySymbol}{coin.market_data.current_price["inr"]}
</StatNumber>
<StatHelpText>
<StatArrow type={coin.market_data.price_change_percentage_24h > 0? "increase": "decrease" }/>

</StatHelpText>
</Stat >
<Badge fontSize={"2x1"} bgColor={"blackAlpha.800"} color={"white"} >
{`#${coin.market_cap_rank}`}

</Badge>

<CustomBar high={`${coin.market_data.high_24h[currency]}`}
  Low={`${coin.market_data.low_24h[currency]}`}
/>


</VStack>

    </>
  )
}
   </Container>
  )
}


const CustomBar = ({high,Low})=>(
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"}/>
<HStack justifyContent={"space-between"} w={"full"}>
<Badge children={Low} colorScheme={"red"}/>
<Text fontSize={"sm"}>24H Range</Text>
<Badge children={high} colorScheme={"green"}/>

</HStack>
  </VStack>
)
export default CoinDetails
