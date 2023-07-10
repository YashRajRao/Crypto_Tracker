
import axios from "axios";
import { server} from "../index"
import { useEffect, useState } from "react";
import { Button, Container, HStack, Radio, RadioGroup} from "@chakra-ui/react"
import Loader from "./Loader";
import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";

const Coins = () => {
 
 const [coins,setcoins] = useState([]);
 const [loading,setloading] = useState(true);
 const [Error,setError] = useState(false);
 const [page,setpage] = useState(1);
 const [currency,setcurrency] = useState("inr");

 const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$s";

 const changePage = ( page)=>{
setpage(page);
setloading(true)
 }
 const btns = new Array(132).fill(1)



  useEffect(()=>{
    const fetchCoins = async () =>{
    
    try {
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
      setcoins(data)
      console.log(data)
      setloading(false)
    } catch (error) {
      setError(true);
      setloading(false);
    }
    }
    fetchCoins()
  }, [currency,page])

  if(Error) return <ErrorComponent message={"Error While Fetching Coins"}/>
  return (
   
    <Container maxW={"container.xl"}>

    {loading? <Loader/> : (
<>

<RadioGroup  value={currency} onChange={setcurrency} p={"4"}>
  <HStack spacing={"4"}>
    <Radio value={"inr"}>INR</Radio>
     <Radio value={"usd"}>USD</Radio>
     <Radio value={"eur"}>EUR</Radio>
  </HStack>
</RadioGroup>
<HStack wrap={"wrap"} justifyContent={"space-evenly"}>
  {
    coins.map(i=>(
      <CoinCard  id={i.id} key={i.id} name={i.name} price={i.current_price} img={i.image} symbol={i.symbol} currencySymbol={currencySymbol}/>
    ))
  }
</HStack>

<HStack w={"full"} overflow={"auto"} p={"8"} >
 {
  btns.map((iteam,index)=>(
    <Button  key={index} backgroundColor={"blackAlpha.900"} color={"white"} onClick={()=>changePage(index+1)}>{index+1}</Button>
  ))
 }
</HStack>
</>

    )}

    </Container>
  )
};



export default Coins

