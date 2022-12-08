import { CryptoInfoData } from './types';

const Coin = ({ name, price, symbol, volume, image, marketcap, priceChange }: CryptoInfoData) => {
  return (
    < div className='coin' >
        < div className='coin__row'>
          <div className='coin__row__price'>
            <img src={image} alt='crypto' className='coin__row__price__img' />
            <span className='coin__row__price__name'>{name}</span>
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