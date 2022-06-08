<template>
  <h1>Top 10 Crypto Currencies</h1>
  <div class="cryptos">
    <CryptoCard v-for="crypto in cryptos" :key="crypto.id" :crypto="crypto"/>
  </div>
</template>

<script>
import CryptoCard from "@/components/CryptoCard.vue";

export default {
  name: "CryptoList",
  computed: {
    cryptos() {
      return this.$store.state.cryptos
    }
  },
  components: {
    CryptoCard,
  },
};
</script>

<style>
.cryptos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>