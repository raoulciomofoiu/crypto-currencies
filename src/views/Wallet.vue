<template>
  <ul>
    <li>
      <span>
        {{ btcName }} ~
        {{ btcAmount }}
        {{ btcSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueBtc" />
        <button @click="sellBtc(sellValueBtc)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ ethName }} ~
        {{ ethAmount }}
        {{ ethSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueEth" />
        <button @click="sellEth(sellValueEth)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ usdtName }} ~
        {{ usdtAmount }}
        {{ usdtSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueUsdt" />
        <button @click="sellUsdt(sellValueUsdt)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ usdcName }} ~
        {{ usdcAmount }}
        {{ usdcSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueUsdc" />
        <button @click="sellUsdc(sellValueUsdc)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ bnbName }} ~
        {{ bnbAmount }}
        {{ bnbSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueBnb" />
        <button @click="sellBnb(sellValueBnb)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ adaName }} ~
        {{ adaAmount }}
        {{ adaSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueAda" />
        <button @click="sellAda(sellValueAda)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ xrpName }} ~
        {{ xrpAmount }}
        {{ xrpSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueXrp" />
        <button @click="sellXrp(sellValueXrp)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ busdName }} ~
        {{ busdAmount }}
        {{ busdSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueBusd" />
        <button @click="sellBusd(sellValueBusd)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ solName }} ~
        {{ solAmount }}
        {{ solSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueSol" />
        <button @click="sellSol(sellValueSol)">SELL</button>
      </span>
    </li>
    <li>
      <span>
        {{ dogeName }} ~
        {{ dogeAmount }}
        {{ dogeSymbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValueDoge" />
        <button @click="sellDoge(sellValueDoge)">SELL</button>
      </span>
    </li>
  </ul>

  <div class="sold">My Balance: {{ fiatBalance }} $</div>
</template>

<script>
export default {
  data() {
    return {
      sellValueBtc: 0,
      sellValueEth: 0,
      sellValueUsdt: 0,
      sellValueUsdc: 0,
      sellValueBnb: 0,
      sellValueAda: 0,
      sellValueXrp: 0,
      sellValueBusd: 0,
      sellValueSol: 0,
      sellValueDoge: 0,
    };
  },
  methods: {
    sellBtc(sellValueBtc) {
      this.$store.dispatch('sellBtc', sellValueBtc);
    },
    sellEth(sellValueEth) {
      this.$store.dispatch('sellEth', sellValueEth);
    },
    sellUsdt(sellValueUsdt) {
      this.$store.dispatch('sellUsdt', sellValueUsdt);
    },
    sellUsdc(sellValueUsdc) {
      this.$store.dispatch('sellUsdc', sellValueUsdc);
    },
    sellBnb(sellValueBnb) {
      this.$store.dispatch('sellBnb', sellValueBnb);
    },
    sellAda(sellValueAda) {
      this.$store.dispatch('sellAda', sellValueAda);
    },
    sellXrp(sellValueXrp) {
      this.$store.dispatch('sellXrp', sellValueXrp);
    },
    sellBusd(sellValueBusd) {
      this.$store.dispatch('sellBusd', sellValueBusd);
    },
    sellSol(sellValueSol) {
      this.$store.dispatch('sellSol', sellValueSol);
    },
    sellDoge(sellValueDoge) {
      this.$store.dispatch('sellDoge', sellValueDoge);
    },
  },
  computed: {
    fiatBalance() {
      return this.$store.state.fiatBalance;
    },
    btcName() {
      return this.$store.state.cryptos[0].name;
    },
    btcAmount() {
      return this.$store.state.cryptos[0].amount;
    },
    btcSymbol() {
      return this.$store.state.cryptos[0].symbol;
    },
    ethName() {
      return this.$store.state.cryptos[1].name;
    },
    ethAmount() {
      return this.$store.state.cryptos[1].amount;
    },
    ethSymbol() {
      return this.$store.state.cryptos[1].symbol;
    },
    usdtName() {
      return this.$store.state.cryptos[2].name;
    },
    usdtAmount() {
      return this.$store.state.cryptos[2].amount;
    },
    usdtSymbol() {
      return this.$store.state.cryptos[2].symbol;
    },
    usdcName() {
      return this.$store.state.cryptos[3].name;
    },
    usdcAmount() {
      return this.$store.state.cryptos[3].amount;
    },
    usdcSymbol() {
      return this.$store.state.cryptos[3].symbol;
    },
    bnbName() {
      return this.$store.state.cryptos[4].name;
    },
    bnbAmount() {
      return this.$store.state.cryptos[4].amount;
    },
    bnbSymbol() {
      return this.$store.state.cryptos[4].symbol;
    },
    adaName() {
      return this.$store.state.cryptos[5].name;
    },
    adaAmount() {
      return this.$store.state.cryptos[5].amount;
    },
    adaSymbol() {
      return this.$store.state.cryptos[5].symbol;
    },
    xrpName() {
      return this.$store.state.cryptos[6].name;
    },
    xrpAmount() {
      return this.$store.state.cryptos[6].amount;
    },
    xrpSymbol() {
      return this.$store.state.cryptos[6].symbol;
    },
    busdName() {
      return this.$store.state.cryptos[7].name;
    },
    busdAmount() {
      return this.$store.state.cryptos[7].amount;
    },
    busdSymbol() {
      return this.$store.state.cryptos[7].symbol;
    },
    solName() {
      return this.$store.state.cryptos[8].name;
    },
    solAmount() {
      return this.$store.state.cryptos[8].amount;
    },
    solSymbol() {
      return this.$store.state.cryptos[8].symbol;
    },
    dogeName() {
      return this.$store.state.cryptos[9].name;
    },
    dogeAmount() {
      return this.$store.state.cryptos[9].amount;
    },
    dogeSymbol() {
      return this.$store.state.cryptos[9].symbol;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

ul li {
  font-size: x-large;
}

button {
  width: 60px;
  height: 27px;
  padding: 5.5px;
}

input {
  margin: 5px;
  width: 75px;
}

.sold {
  padding: 25px;
  font-size: x-large;
  font-weight: 800;
}
</style>
