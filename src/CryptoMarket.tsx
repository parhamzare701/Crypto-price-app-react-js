import { useState, useEffect } from 'react';
import './style/style.scss';
import Coins from "./Coins";
import { CryptoResultData } from "./types";
function App() {
  const [cryptoData, setCryptoData] = useState<[] | null>(null);
  useEffect(() => {
    const getSearchResult = async () => {
      const cryptoPriceResponse = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
      const cryptoPriceJson = await cryptoPriceResponse.json();
      setCryptoData(cryptoPriceJson);
    }
    getSearchResult();
  }, []);
  return (
    <div className='market'>
      <div className='market__container'>
        <h1 className='market__container__title'>Crypto Market</h1>
          {
          cryptoData && cryptoData.map((item: CryptoResultData) => (
              <Coins key={item.id}
                name={item.name}
                image={item.image}
                symbol={item.symbol}
                volume={item.market_cap}
                price={item.current_price}
                marketcap={item.market_cap}
                priceChange={item.price_change_percentage_24h}
              />
          ))}
      </div>
    </div>
  );
}

export default App;