<template>
  <div class="wallet-container">
    <WalletEntry v-for="crypto in cryptos" :key="crypto.id" :crypto="crypto" :sellCrypto="sellCrypto" />
  </div>

  <div class="sold">My Balance: {{ fiatBalance }} $</div>
</template>

<script>
import WalletEntry from '@/components/WalletEntry.vue';

export default {
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
  components: { WalletEntry },
};
</script>

<style scoped>
.sold {
  padding: 25px;
  font-size: x-large;
  font-weight: 800;
}

.wallet-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
