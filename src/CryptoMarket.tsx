import { useState, useEffect } from 'react';
import './style/style.scss';
import Coins from "./Coins";
import { CryptoResultData } from "./types/types";
function App() {
  const [cryptoData, setCryptoData] = useState<[] | null>(null);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const getSearchResult = async () => {
      const cryptoPriceResponse = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
      const cryptoPriceJson = await cryptoPriceResponse.json();
      setCryptoData(cryptoPriceJson);
    }
    getSearchResult();
  }, []);
  const matches = cryptoData?.filter((cryptoData: CryptoResultData)=>{
    return cryptoData.name.match(inputValue);
  })
  return (
    <div className='market'>
      <div className='market__container'>
        <h1 className='market__container__title'>Crypto Market</h1>
        <input
          className='market__container__input'
          placeholder='Search for crypto'
          type="text" value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        />
        {
          cryptoData && matches?.map((item: CryptoResultData) => (
            <Coins key={item.id}
              name={item.name}
              image={item.image}
              symbol={item.symbol}
              volume={item.market_cap}
              price={item.current_price}
              marketcap={item.market_cap}
              priceChange={item.price_change_percentage_24h}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;