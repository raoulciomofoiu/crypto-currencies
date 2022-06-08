import { createStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    defaultValues: [
      { INITIAL_FUNDS: 100 },
      { BTC_PRICE: 30430.57 },
      { ETH_PRICE: 1798.07 },
      { USDT_PRICE: 0.9996 },
      { USDC_PRICE: 1 },
      { BNB_PRICE: 292.63 },
      { ADA_PRICE: 0.6389 },
      { XRP_PRICE: 0.4011 },
      { BUSD_PRICE: 0.9999 },
      { SOL_PRICE: 39.43 },
      { DOGE_PRICE: 0.0803 }
    ],
    cryptos: [
      {
        id: uuidv4(),
        name: 'Bitcoin',
        image: 'bitcoin.png',
        symbol: 'BTC',
        price: 30430.57, 
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'Ethereum',
        image: 'ethereum.png',
        symbol: 'ETH',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'Tether',
        image: 'usdt.png',
        symbol: 'USDT',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'USD Coin',
        image: 'usdc.png',
        symbol: 'USDC',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'BNB',
        image: 'bnb.png',
        symbol: 'BNB',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'Cardano',
        image: 'ada.png',
        symbol: 'ADA',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'XRP',
        image: 'xrp.png',
        symbol: 'XRP',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'Binance USD',
        image: 'busd.png',
        symbol: 'BUSD',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'Solana',
        image: 'sol.png',
        symbol: 'SOL',
        price: 30000,
        marketCap: 1000000000
      },
      {
        id: uuidv4(),
        name: 'Dogecoin',
        image: 'doge.png',
        symbol: 'DOGE',
        price: 30000,
        marketCap: 1000000000
      }
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    btcAmount (state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[1].BTC_PRICE
    }
  },
  modules: {},
});
