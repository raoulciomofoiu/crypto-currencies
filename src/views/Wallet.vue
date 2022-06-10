<template>
  <ul>
    <li v-for="crypto in cryptos" :key="crypto.id">
      <span>
        {{ crypto.name }} ~
        {{ crypto.amount }}
        {{ crypto.symbol }}
        &nbsp; &nbsp;
        <input type="number" v-model="sellValue" />
        <button @click="sellCrypto(crypto, sellValue)">SELL</button>
      </span>
    </li>
  </ul>

  <div class="sold">My Balance: {{ fiatBalance }} $</div>
</template>

<script>
export default {
  data() {
    return {
      sellValue: 0,
      // sellValueEth: 0,
      // sellValueUsdt: 0,
      // sellValueUsdc: 0,
      // sellValueBnb: 0,
      // sellValueAda: 0,
      // sellValueXrp: 0,
      // sellValueBusd: 0,
      // sellValueSol: 0,
      // sellValueDoge: 0,
    };
  },
  methods: {
    sellCrypto(crypto, sellValue) {
      this.$store.dispatch('sellCrypto', { crypto, sellValue });
    },
  },
  computed: {
    cryptos() {
      return this.$store.state.cryptos;
    },
    fiatBalance() {
      return this.$store.state.fiatBalance;
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
