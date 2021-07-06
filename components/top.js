import React,{useState,useEffect} from "react"
import axios from "axios"

function Top() {
    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState([]);
    // let array = [];
    useEffect(()=>{
      const onSubmit = async () => {
        try{
          const res = await axios({
            method: "get",
            url: "https://api.coinpaprika.com/v1/coins",
            params: coin_id,
          });
          setLoading(true);
          setCoins(Object.entries(res.data));
        //   console.log(array);
          
        } catch (err) {
          console.log(err);
        }
      }
    onSubmit();
    }, []);

    

    return <div>
        
    </div>
}

export default Top