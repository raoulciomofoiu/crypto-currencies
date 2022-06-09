import { createStore } from 'vuex';
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
      { DOGE_PRICE: 0.0803 },
    ],
    cryptos: [
      {
        id: uuidv4(),
        name: 'Bitcoin',
        image: 'bitcoin.png',
        symbol: 'BTC',
        price: 30430.57,
        amount: 100 / 30430.57,
      },
      {
        id: uuidv4(),
        name: 'Ethereum',
        image: 'ethereum.png',
        symbol: 'ETH',
        price: 1798.07,
      },
      {
        id: uuidv4(),
        name: 'Tether',
        image: 'usdt.png',
        symbol: 'USDT',
        price: 0.9996,
      },
      {
        id: uuidv4(),
        name: 'USD Coin',
        image: 'usdc.png',
        symbol: 'USDC',
        price: 1,
      },
      {
        id: uuidv4(),
        name: 'BNB',
        image: 'bnb.png',
        symbol: 'BNB',
        price: 292.63,
      },
      {
        id: uuidv4(),
        name: 'Cardano',
        image: 'ada.png',
        symbol: 'ADA',
        price: 0.6389,
      },
      {
        id: uuidv4(),
        name: 'XRP',
        image: 'xrp.png',
        symbol: 'XRP',
        price: 0.4011,
      },
      {
        id: uuidv4(),
        name: 'Binance USD',
        image: 'busd.png',
        symbol: 'BUSD',
        price: 0.9999,
      },
      {
        id: uuidv4(),
        name: 'Solana',
        image: 'sol.png',
        symbol: 'SOL',
        price: 39.43,
      },
      {
        id: uuidv4(),
        name: 'Dogecoin',
        image: 'doge.png',
        symbol: 'DOGE',
        price: 0.0803,
      },
    ],
    fiatBalance: 0,
  },
  mutations: {
    SET_AMOUNT_BTC(state, amount) {
      state.cryptos[0].amount = amount;
    },
    SET_FIAT_BALANCE(state, fiatBalance) {
      state.fiatBalance = fiatBalance;
    },
  },
  actions: {
    sellBtc({ commit, state }, sellValueBtc) {
      const amount = state.cryptos[0].amount - sellValueBtc;
      if (amount >= 0) {
        commit('SET_AMOUNT_BTC', amount);
      } else {
        alert('Not enough balance');
      }
      const fiatAmount = state.fiatBalance + sellValueBtc * 30430.57;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },
  },
  getters: {
    btcAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[1].BTC_PRICE;
    },
    ethAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[2].ETH_PRICE;
    },
    usdtAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[3].USDT_PRICE;
    },
    usdcAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[4].USDC_PRICE;
    },
    bnbAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[5].BNB_PRICE;
    },
    adaAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[6].ADA_PRICE;
    },
    xrpAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[7].XRP_PRICE;
    },
    busdAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[8].BUSD_PRICE;
    },
    solAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[9].SOL_PRICE;
    },
    dogeAmount(state) {
      return state.defaultValues[0].INITIAL_FUNDS / state.defaultValues[10].DOGE_PRICE;
    },
  },
  modules: {},
});
