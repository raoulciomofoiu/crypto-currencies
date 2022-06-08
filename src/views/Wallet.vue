<template>
  <ul>
    <li>
      <span>
        {{ btcName }} ~
        {{ btcAmount }}
        {{ btcSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ ethName }} ~
        {{ ethAmount }}
        {{ ethSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ usdtName }} ~
        {{ usdtAmount }}
        {{ usdtSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ usdcName }} ~
        {{ usdcAmount }}
        {{ usdcSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ bnbName }} ~
        {{ bnbAmount }}
        {{ bnbSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ adaName }} ~
        {{ adaAmount }}
        {{ adaSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ xrpName }} ~
        {{ xrpAmount }}
        {{ xrpSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ busdName }} ~
        {{ busdAmount }}
        {{ busdSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ solName }} ~
        {{ solAmount }}
        {{ solSymbol }}
      </span>
    </li>
    <li>
      <span>
        {{ dogeName }} ~
        {{ dogeAmount }}
        {{ dogeSymbol }}
      </span>
    </li>
  </ul>  
</template>

<script>
  export default {
    computed: {
      btcName() {
        return this.$store.state.cryptos[0].name
      },
      btcAmount() {
        return this.$store.getters.btcAmount
      },
      btcSymbol() {
        return this.$store.state.cryptos[0].symbol
      },
      ethName() {
        return this.$store.state.cryptos[1].name
      },
      ethAmount() {
        return this.$store.getters.ethAmount
      },
      ethSymbol() {
        return this.$store.state.cryptos[1].symbol
      },
      usdtName() {
        return this.$store.state.cryptos[2].name
      },
      usdtAmount() {
        return this.$store.getters.usdtAmount
      },
      usdtSymbol() {
        return this.$store.state.cryptos[2].symbol
      },
      usdcName() {
        return this.$store.state.cryptos[3].name
      },
      usdcAmount() {
        return this.$store.getters.usdcAmount
      },
      usdcSymbol() {
        return this.$store.state.cryptos[3].symbol
      },
      bnbName() {
        return this.$store.state.cryptos[4].name
      },
      bnbAmount() {
        return this.$store.getters.bnbAmount
      },
      bnbSymbol() {
        return this.$store.state.cryptos[4].symbol
      },
      adaName() {
        return this.$store.state.cryptos[5].name
      },
      adaAmount() {
        return this.$store.getters.adaAmount
      },
      adaSymbol() {
        return this.$store.state.cryptos[5].symbol
      },
      xrpName() {
        return this.$store.state.cryptos[6].name
      },
      xrpAmount() {
        return this.$store.getters.xrpAmount
      },
      xrpSymbol() {
        return this.$store.state.cryptos[6].symbol
      },
      busdName() {
        return this.$store.state.cryptos[7].name
      },
      busdAmount() {
        return this.$store.getters.busdAmount
      },
      busdSymbol() {
        return this.$store.state.cryptos[7].symbol
      },
      solName() {
        return this.$store.state.cryptos[8].name
      },
      solAmount() {
        return this.$store.getters.solAmount
      },
      solSymbol() {
        return this.$store.state.cryptos[8].symbol
      },
      dogeName() {
        return this.$store.state.cryptos[9].name
      },
      dogeAmount() {
        return this.$store.getters.dogeAmount
      },
      dogeSymbol() {
        return this.$store.state.cryptos[9].symbol
      },
    }
  }
</script>

<style scoped>
ul {
  list-style-type: none;
} 
</style>