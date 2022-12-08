export interface CryptoInfoData {
  name: string;
  symbol: string;
  price: number;
  volume: number;
  image: string;
  priceChange: number;
  marketcap: number;
}
export interface CryptoResultData {
  id: string;
  current_price: number;
  image: string;
  name: string;
  symbol: string;
  market_cap: number;
  price_change_percentage_24h: number;
}
export interface CryptoFilterData {
  isChecked: {
    upwardTrend: boolean,
    downwardTrend: boolean
  }
  setIsChecked: (isChecked: {
    upwardTrend: boolean,
    downwardTrend: boolean
  }) => void;
}