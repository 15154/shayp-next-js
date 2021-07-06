import Head from 'next/head'
import Global from '../components/global'
import Menu from '../components/menu'

import React,{useState,useEffect} from "react"
import axios from "axios"

export default function Index() {
  const [loading, setLoading] = useState(false);
    const [ticker, setTicker] = useState([]);
    useEffect(()=>{
      const onSubmit = async () => {
        try{
          const res = await axios({
            method: "get",
            url: "https://api.coinpaprika.com/v1/ticker",
          });
          setLoading(true);
          setTicker(Object.entries(res.data));
        } catch (err) {
          console.log(err);
        }
        console.log(ticker[1][1].name);
      }
    onSubmit();
    }, []);
    // if (loading) {
    //     console.log(ticker);
    // }
    // console.log(ticker[0][1].name);

    // const array = ticker.map((k, v) => 
    //     k + " "
    // )

  return (
    <div className="container">
      <Head>
        <title>Shayp-Assesment</title>
        <Menu/>
      </Head>

      <Global/>

      <main>
        <h1 className="title">
          Top 20 cryptocurrencies
        </h1>

        <table>
          <thead>
            <tr>
              <th>
                Rank
              </th>
              <th>
                Name
              </th>
              <th>
                Symbol
              </th>
              <th>
                Price USD
              </th>
              <th>
                Percent change 1h
              </th>
              <th>
                Percent change 24h
              </th>
              <th>
                Volume 24h USD
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {ticker[0][1].rank}
              </td>
              <td>
                {ticker[0][1].name}
              </td>
              <td>
                {ticker[0][1].symbol}
              </td>
              <td>
                {ticker[0][1].price_usd}
              </td>
              <td>
                {ticker[0][1].percent_change_1h}
              </td>
              <td>
                {ticker[0][1].percent_change_24h}
              </td>
              <td>
                {ticker[0][1].volume_24h_usd}
              </td>
            </tr>
            {/* <tr>
              <td>
                {ticker[1][1].rank}
              </td>
              <td>
                {ticker[1][1].name}
              </td>
              <td>
                {ticker[1][1].symbol}
              </td>
              <td>
                {ticker[1][1].price_usd}
              </td>
              <td>
                {ticker[1][1].percent_change_1h}
              </td>
              <td>
                {ticker[1][1].percent_change_24h}
              </td>
              <td>
                {ticker[1][1].volume_24h_usd}
              </td>
            </tr>
            <tr>
              <td>
                {ticker[2][1].rank}
              </td>
              <td>
                {ticker[2][1].name}
              </td>
              <td>
                {ticker[2][1].symbol}
              </td>
              <td>
                {ticker[2][1].price_usd}
              </td>
              <td>
                {ticker[2][1].percent_change_1h}
              </td>
              <td>
                {ticker[2][1].percent_change_24h}
              </td>
              <td>
                {ticker[2][1].volume_24h_usd}
              </td>
            </tr> */}
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
