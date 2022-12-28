import { MoreInfoModalData } from '../types/types'

const MoreInfoModal = ({closeMoreInfoModal, name , price, volume, symbol,marketcap, priceChange} : MoreInfoModalData) => {
  return (
    <div className='moreinfo' onClick={closeMoreInfoModal}>
        <div className='moreinfo__container' onClick={(e:React.MouseEvent<HTMLDivElement>)=>e.stopPropagation()}>
            <span className='moreinfo__container__name'>{name}</span>
            <span className='moreinfo__container__symbol'>{symbol.toUpperCase()}</span>
            <span className='moreinfo__container__price'><span className='moreinfo__container__price__text'>Price : </span>${price}</span>
            <span className='moreinfo__container__volume'><span className='moreinfo__container__volume__text'>Volume : </span>${volume}</span>
            {priceChange < 0 ? (<span className='moreinfo__container__pricechange--red moreinfo__container__pricechange'><span className='moreinfo__container__pricechange__text'>Price Change : </span>{priceChange.toFixed(2)}%</span>)
            : (<span className='moreinfo__container__pricechange--green moreinfo__container__pricechange'><span className='moreinfo__container__pricechange__text'>Price Change : </span>{Number(priceChange).toFixed(2)}%</span>)
          }
            <span className='moreinfo__container__marketcap'><span className='moreinfo__container__marketcap__text'>Mkt Cap: </span>${marketcap}</span>
          <button className='moreinfo__container__btn' onClick={closeMoreInfoModal}>Close</button>
        </div>
    </div>
  )
}

export default MoreInfoModal