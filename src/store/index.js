import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    fiatBalance: 0,
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
        amount: 100 / 1798.07,
      },
      {
        id: uuidv4(),
        name: 'Tether',
        image: 'usdt.png',
        symbol: 'USDT',
        price: 0.9996,
        amount: 100 / 0.9996,
      },
      {
        id: uuidv4(),
        name: 'USD Coin',
        image: 'usdc.png',
        symbol: 'USDC',
        price: 1,
        amount: 100 / 1,
      },
      {
        id: uuidv4(),
        name: 'BNB',
        image: 'bnb.png',
        symbol: 'BNB',
        price: 292.63,
        amount: 100 / 292.63,
      },
      {
        id: uuidv4(),
        name: 'Cardano',
        image: 'ada.png',
        symbol: 'ADA',
        price: 0.6389,
        amount: 100 / 0.6389,
      },
      {
        id: uuidv4(),
        name: 'XRP',
        image: 'xrp.png',
        symbol: 'XRP',
        price: 0.4011,
        amount: 100 / 0.4011,
      },
      {
        id: uuidv4(),
        name: 'Binance USD',
        image: 'busd.png',
        symbol: 'BUSD',
        price: 0.9999,
        amount: 100 / 0.9999,
      },
      {
        id: uuidv4(),
        name: 'Solana',
        image: 'sol.png',
        symbol: 'SOL',
        price: 39.43,
        amount: 100 / 39.43,
      },
      {
        id: uuidv4(),
        name: 'Dogecoin',
        image: 'doge.png',
        symbol: 'DOGE',
        price: 0.0803,
        amount: 100 / 0.0803,
      },
    ],
  },
  mutations: {
    SET_FIAT_BALANCE(state, fiatBalance) {
      state.fiatBalance = fiatBalance;
    },
    SET_AMOUNT_BTC(state, amount) {
      state.cryptos[0].amount = amount;
    },
    SET_AMOUNT_ETH(state, amount) {
      state.cryptos[1].amount = amount;
    },
    SET_AMOUNT_USDT(state, amount) {
      state.cryptos[2].amount = amount;
    },
    SET_AMOUNT_USDC(state, amount) {
      state.cryptos[3].amount = amount;
    },
    SET_AMOUNT_BNB(state, amount) {
      state.cryptos[4].amount = amount;
    },
    SET_AMOUNT_ADA(state, amount) {
      state.cryptos[5].amount = amount;
    },
    SET_AMOUNT_XRP(state, amount) {
      state.cryptos[6].amount = amount;
    },
    SET_AMOUNT_BUSD(state, amount) {
      state.cryptos[7].amount = amount;
    },
    SET_AMOUNT_SOL(state, amount) {
      state.cryptos[8].amount = amount;
    },
    SET_AMOUNT_DOGE(state, amount) {
      state.cryptos[9].amount = amount;
    },
  },
  actions: {
    sellBtc({ commit, state }, sellValueBtc) {
      const amount = state.cryptos[0].amount - sellValueBtc;
      if (amount >= 0) {
        commit('SET_AMOUNT_BTC', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueBtc * 30430.57;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellEth({ commit, state }, sellValueEth) {
      const amount = state.cryptos[1].amount - sellValueEth;
      if (amount >= 0) {
        commit('SET_AMOUNT_ETH', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueEth * 1798.07;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellUsdt({ commit, state }, sellValueUsdt) {
      const amount = state.cryptos[2].amount - sellValueUsdt;
      if (amount >= 0) {
        commit('SET_AMOUNT_USDT', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueUsdt * 0.9996;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellUsdc({ commit, state }, sellValueUsdc) {
      const amount = state.cryptos[3].amount - sellValueUsdc;
      if (amount >= 0) {
        commit('SET_AMOUNT_USDC', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueUsdc * 1;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellBnb({ commit, state }, sellValueBnb) {
      const amount = state.cryptos[4].amount - sellValueBnb;
      if (amount >= 0) {
        commit('SET_AMOUNT_BNB', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueBnb * 292.63;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellAda({ commit, state }, sellValueAda) {
      const amount = state.cryptos[5].amount - sellValueAda;
      if (amount >= 0) {
        commit('SET_AMOUNT_ADA', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueAda * 0.6389;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellXrp({ commit, state }, sellValueXrp) {
      const amount = state.cryptos[6].amount - sellValueXrp;
      if (amount >= 0) {
        commit('SET_AMOUNT_XRP', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueXrp * 0.4011;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellBusd({ commit, state }, sellValueBusd) {
      const amount = state.cryptos[7].amount - sellValueBusd;
      if (amount >= 0) {
        commit('SET_AMOUNT_BUSD', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueBusd * 0.9999;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellSol({ commit, state }, sellValueSol) {
      const amount = state.cryptos[8].amount - sellValueSol;
      if (amount >= 0) {
        commit('SET_AMOUNT_SOL', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueSol * 39.43;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },

    sellDoge({ commit, state }, sellValueDoge) {
      const amount = state.cryptos[9].amount - sellValueDoge;
      if (amount >= 0) {
        commit('SET_AMOUNT_DOGE', amount);
      } else {
        alert('Not enough balance');
        return;
      }
      const fiatAmount = state.fiatBalance + sellValueDoge * 0.0803;
      commit('SET_FIAT_BALANCE', fiatAmount);
    },
  },
  getters: {},
  modules: {},
});
