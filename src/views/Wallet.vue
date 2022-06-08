<template>
  <ul>
    <li v-for="crypto in cryptos" :key="crypto.id">
      <span>
        {{ crypto.name }}
        {{ btcAmount }}
        {{ bitcoinSymbol }}
      </span>
    </li>
  </ul>  
</template>

<script>
  export default {
    computed: {
      cryptos() {
        return this.$store.state.cryptos
      },
      btcAmount() {
        return this.$store.getters.btcAmount
      },
      bitcoinSymbol() {
        return this.$store.state.cryptos[0].symbol
      },
      // balance() {
      //   return this.$store.state.balance
      // }
    }
  }
</script>

<style scoped>
ul {
  list-style-type: none;
} 
</style>