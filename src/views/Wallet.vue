<template>
  <div class="wallet-container">
    <WalletEntry v-for="crypto in cryptos" :key="crypto.id" :crypto="crypto" :sellCrypto="sellCrypto" />
  </div>

  <div class="sold">My Balance: {{ fiatBalance }} $</div>
</template>

<!-- Composition API -->

<script>
import WalletEntry from '@/components/WalletEntry.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  components: { WalletEntry },
  setup() {
    const store = useStore();

    const cryptos = computed(() => store.state.cryptos);
    const fiatBalance = computed(() => store.state.fiatBalance);

    const sellCrypto = (crypto, sellValue) => store.dispatch('sellCrypto', { crypto, sellValue });

    return {
      cryptos,
      fiatBalance,
      sellCrypto,
    };
  },
};
</script>

<!-- Options API -->

<!-- <script>
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
</script> -->

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
