<template>
  <h1>Top 10 Crypto Currencies</h1>
  <div class="cryptos">
    <CryptoCard v-for="crypto in cryptos" :key="crypto.id" :crypto="crypto" />
  </div>
</template>

<!-- Composition API -->

<script>
import CryptoCard from '@/components/CryptoCard.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { CryptoCard },
  setup() {
    const store = useStore();

    const cryptos = computed(() => store.state.cryptos);

    return {
      cryptos,
    };
  },
};
</script>

<!-- Options API -->

<!-- <script>
import CryptoCard from '@/components/CryptoCard.vue';

export default {
  computed: {
    cryptos() {
      return this.$store.state.cryptos;
    },
  },
  components: {
    CryptoCard,
  },
};
</script> -->

<style>
.cryptos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
