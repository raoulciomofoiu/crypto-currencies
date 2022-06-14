import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    fiatBalance: 0,
    cryptos: {
      bitcoin: {
        id: uuidv4(),
        name: 'Bitcoin',
        image: 'bitcoin.png',
        symbol: 'BTC',
        price: 30430.57,
        amount: 100 / 30430.57,
      },
      ethereum: {
        id: uuidv4(),
        name: 'Ethereum',
        image: 'ethereum.png',
        symbol: 'ETH',
        price: 1798.07,
        amount: 100 / 1798.07,
      },
      tether: {
        id: uuidv4(),
        name: 'Tether',
        image: 'usdt.png',
        symbol: 'USDT',
        price: 0.9996,
        amount: 100 / 0.9996,
      },
      usdc: {
        id: uuidv4(),
        name: 'USD Coin',
        image: 'usdc.png',
        symbol: 'USDC',
        price: 1,
        amount: 100 / 1,
      },
      bnb: {
        id: uuidv4(),
        name: 'BNB',
        image: 'bnb.png',
        symbol: 'BNB',
        price: 292.63,
        amount: 100 / 292.63,
      },
      cardano: {
        id: uuidv4(),
        name: 'Cardano',
        image: 'ada.png',
        symbol: 'ADA',
        price: 0.6389,
        amount: 100 / 0.6389,
      },
      xrp: {
        id: uuidv4(),
        name: 'XRP',
        image: 'xrp.png',
        symbol: 'XRP',
        price: 0.4011,
        amount: 100 / 0.4011,
      },
      busd: {
        id: uuidv4(),
        name: 'Binance USD',
        image: 'busd.png',
        symbol: 'BUSD',
        price: 0.9999,
        amount: 100 / 0.9999,
      },
      solana: {
        id: uuidv4(),
        name: 'Solana',
        image: 'sol.png',
        symbol: 'SOL',
        price: 39.43,
        amount: 100 / 39.43,
      },
      dogecoin: {
        id: uuidv4(),
        name: 'Dogecoin',
        image: 'doge.png',
        symbol: 'DOGE',
        price: 0.0803,
        amount: 100 / 0.0803,
      },
    },
  },
  mutations: {
    SET_FIAT_BALANCE(state, fiatBalance) {
      state.fiatBalance = fiatBalance;
    },
    SET_CRYPTO_AMOUNT(state, { crypto, amount }) {
      switch (crypto.name) {
        case 'Bitcoin':
          state.cryptos.bitcoin.amount = amount;
          break;
        case 'Ethereum':
          state.cryptos.ethereum.amount = amount;
          break;
        case 'Tether':
          state.cryptos.tether.amount = amount;
          break;
        case 'USD Coin':
          state.cryptos.usdc.amount = amount;
          break;
        case 'BNB':
          state.cryptos.bnb.amount = amount;
          break;
        case 'Cardano':
          state.cryptos.cardano.amount = amount;
          break;
        case 'XRP':
          state.cryptos.xrp.amount = amount;
          break;
        case 'Binance USD':
          state.cryptos.busd.amount = amount;
          break;
        case 'Solana':
          state.cryptos.solana.amount = amount;
          break;
        case 'Dogecoin':
          state.cryptos.dogecoin.amount = amount;
          break;
      }
    },
  },
  actions: {
    sellCrypto({ commit, state }, { crypto, sellValue }) {
      if (sellValue >= 0) {
        const amount = crypto.amount - sellValue;
        if (amount >= 0) {
          commit('SET_CRYPTO_AMOUNT', { crypto, amount });
        } else {
          alert(`Not enough ${crypto.symbol} balance`);
          return;
        }
        const fiatAmount = state.fiatBalance + sellValue * crypto.price;
        commit('SET_FIAT_BALANCE', fiatAmount);
        sellValue = 0;
      } else {
        alert('Please enter a posivite number');
      }
    },
  },
  getters: {},
  modules: {},
});
