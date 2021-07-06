import Head from 'next/head'
import Global from '../components/global'
import Menu from '../components/menu'

import React,{useState,useEffect} from "react"
import axios from "axios"

export default function Converter() {
  const [loading, setLoading] = useState(false);
    const [priceConverter, setPriceConverter] = useState([]);
    // let array = [];
    useEffect(()=>{
      const onSubmit = async () => {
        try{
          const res = await axios({
            method: "get",
            url: "https://api.coinpaprika.com/v1/price-converter",
            params: {
              base_currency_id: "btc-bitcoin",
              quote_currency_id: "usd-us-dollars",
            },
          });
          setLoading(true);
          setPriceConverter(Object.entries(res.data));
        //   console.log(array);
        } catch (err) {
          console.log(err);
        }
      }
    onSubmit();
    }, []);

    // console.log(priceConverter[0][1]);

    var selectElem = document.getElementById('coin-select');
    var pElem = document.getElementById('c1');

    // Quand une nouvelle <option> est selectionnée
    selectElem.addEventListener('change', function() {
      var index = selectElem.selectedIndex;
      // Rapporter cette donnée au <p>
      pElem.innerHTML = index;
    })

    return (
      <div className="container">
        <Head>
          <title>Shayp-Assesment</title>
          <Menu/>
        </Head>
  
        <Global/>
  
        <main>
          <h1 className="title">
            Converter
          </h1>

          <table>
          <thead>
            <tr>
              <th>
                Base currency name
              </th>
              <th>
                Price USD
              </th>
              <th>
                Currencies
              </th>
              <th>
                Convert
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>
                {priceConverter[0][1].base_currency_id}
              </td>
              <td>
                {priceConverter[0][1].price}
              </td>
              <td>
                  <select name="coins" id="coin-select">
                      <option value="">-Please choose a currency-</option>
                      <option value="1">{priceConverter[0][1].base_currency_name}</option>
                      <option value="2">{priceConverter[1][1].base_currency_name}</option>
                      <option value="3">{priceConverter[2][1].base_currency_name}</option>
                      <option value="4">{priceConverter[3][1].base_currency_name}</option>
                      <option value="5">{priceConverter[4][1].base_currency_name}</option>
                      <option value="6">{priceConverter[5][1].base_currency_name}</option>
                      <option value="7">{priceConverter[6][1].base_currency_name}</option>
                      <option value="8">{priceConverter[7][1].base_currency_name}</option>
                      <option value="9">{priceConverter[8][1].base_currency_name}</option>
                      <option value="10">{priceConverter[9][1].base_currency_name}</option>
                      <option value="11">{priceConverter[10][1].base_currency_name}</option>
                      <option value="12">{priceConverter[11][1].base_currency_name}</option>
                      <option value="13">{priceConverter[12][1].base_currency_name}</option>
                      <option value="14">{priceConverter[13][1].base_currency_name}</option>
                      <option value="15">{priceConverter[14][1].base_currency_name}</option>
                      <option value="16">{priceConverter[15][1].base_currency_name}</option>
                      <option value="17">{priceConverter[16][1].base_currency_name}</option>
                      <option value="18">{priceConverter[17][1].base_currency_name}</option>
                      <option value="19">{priceConverter[18][1].base_currency_name}</option>
                      <option value="20">{priceConverter[19][1].base_currency_name}</option>
                  </select>
              </td>
            </tr> */}
            <tr>
              <td>
                Bitcoin
              </td>
              <td>
                386621.99158499995
              </td>
              <td>
                <select name="coins" id="coin-select" onChange="if (this.selectedIndex) doSomething();">
                    <option value="">-Please choose a currency-</option>
                    <option value="1" selected>Bitcoin</option>
                    <option value="2">Ethereum</option>
                </select>
              </td>
              <td id = "c1">

              </td>
            </tr>
          </tbody>
        </table>
  
        </main>
  
        <footer>
          
        </footer>
  
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          footer img {
            margin-left: 0.5rem;
          }
  
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          a {
            color: inherit;
            text-decoration: none;
          }
  
          .title a {
            color: #0070f3;
            text-decoration: none;
          }
  
          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }
  
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
  
          .title,
          .description {
            text-align: center;
          }
  
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
  
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
  
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
  
            max-width: 800px;
            margin-top: 3rem;
          }
  
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
  
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
  
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
  
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
  
          .logo {
            height: 1em;
          }
  
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }

          table {
            text-align: center;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
