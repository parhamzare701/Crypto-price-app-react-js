import { useState } from 'react';
import MoreInfoModal from './modal/MoreInfoModal';
import { CryptoInfoData } from './types/types';

const Coin = ({ name, price, symbol, volume, image, marketcap, priceChange }: CryptoInfoData) => {
  const [showMore, setShowMore] = useState(false);
  return (
    //main code
    <div className='coin' >
      {showMore && <MoreInfoModal
        closeMoreInfoModal={() => setShowMore(false)}
        name={name}
        symbol={symbol}
        price={price}
        priceChange={priceChange}
        volume={volume}
        marketcap={marketcap}
      />}
      < div className='coin__row'>
        <div className='coin__row__price'>
          <img src={image} alt='crypto' className='coin__row__price__img' />
          <span className='coin__row__price__name' onClick={() => setShowMore(true)} >{name}</span>
          <span className='coin__row__price__symbol'>{symbol}</span>
          <span className='coin__row__price__amount'>${price}</span>
          <span className='coin__row__price__volume'>${volume.toLocaleString()}</span>

          {priceChange < 0 ? (<span className='coin__row__price__percent--red coin__row__price__percent'>{priceChange.toFixed(2)}%</span>)
            : (<span className='coin__row__price__percent--green coin__row__price__percent'>{Number(priceChange).toFixed(2)}%</span>)
          }
          <span className='coin__row__price__marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </span>
        </div>
      </div>
    </div >
  );
};

export default Coin;