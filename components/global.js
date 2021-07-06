// import React from "react"

// const CoinpaprikaAPI = require('@coinpaprika/api-nodejs-client');
// const client = new CoinpaprikaAPI();

// function Global() {
//   let global
  
//   async function coucou() {
//     await client.getGlobal().then((text) => Object.keys(text)).then(global=>{return global});
//     // for(let i=0 ; i<globalGlobal.length ; i++) {
//     //     return <ul> {globalGlobal[i]} </ul>
//     // }
//     // console.log(globalGlobal);
//     // if (globalGlobal.status == 200) {
//     //   return globalGlobal
//     // }
    
//     // return <div>
//     //     <li>{globalGlobal.map(elt=>{return <ul> {elt} </ul>})}</li>
//     // </div>
//   }
// // console.log(coucou());
// return <div>
//     <li> {console.log(coucou())} </li>
// </div>
    
// }

// // console.log(Converter(),"checking Converter");

// export default Global

import React,{useState,useEffect} from "react"
import axios from "axios"

function Global() {
    const [loading, setLoading] = useState(false);
    const [global, setGlobal] = useState([]);
    // let array = [];
    useEffect(()=>{
      const onSubmit = async () => {
        try{
          const res = await axios({
            method: "get",
            url: "https://api.coinpaprika.com/v1/global",
          });
          setLoading(true);
          setGlobal(Object.entries(res.data));
        //   console.log(array);
        } catch (err) {
          console.log(err);
        }
      }
    onSubmit();
    }, []);
    // if (loading) {
    //     console.log(global);
    // }
    
    const array = global.map((k, v) => 
        k + " "
    )

    return <div>
        {console.log(global)}

        {/* <ul>
            <li>{array[3]}</li>
            <li>{array[2]}</li>
            <li>{array[6]}</li>
            <li>{array[4]}</li>
        </ul> */}
        <table>
            <tbody>
                <tr>
                    <td>
                        {global[3][0]}
                    </td>
                    <td>
                         : 
                    </td>
                    <td>
                        {global[3][1]}
                    </td>
                </tr>
                <tr>
                    <td>
                        {global[2][0]}
                    </td>
                    <td>
                         : 
                    </td>
                    <td>
                        {global[2][1]}
                    </td>
                </tr>
                <tr>
                    <td>
                        {global[6][0]}
                    </td>
                    <td>
                         : 
                    </td>
                    <td>
                        {global[6][1]}
                    </td>
                </tr>
                <tr>
                    <td>
                        {global[4][0]}
                    </td>
                    <td>
                         : 
                    </td>
                    <td>
                        {global[4][1]}
                    </td>
                </tr>
            </tbody>
        </table>
        {/* {global.map((elt,i) => {return <p>{elt[i][1]}</p>})} */}
        {/* <ul>
        {(loading == true)?(global.map((elt,i) => {
            return (
                <li>
                    {elt[i][0] + " : " + elt[i][1]}
                </li>)
            })):(<div></div>)}
        </ul> */}
    </div>
}

export default Global