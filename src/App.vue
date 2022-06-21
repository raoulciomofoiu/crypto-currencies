<template>
  <div class="app">
    <div class="banner"></div>
    <nav>
      <router-link :to="{ name: 'CryptoList' }">Main Page</router-link>
      <router-link :to="{ name: 'Wallet' }">Wallet</router-link>
      <router-link
        v-for="crypto in slicedCryptos"
        :key="crypto.id"
        :to="{
          name: 'CryptoDetails',
          params: { id: crypto.id, name: crypto.name, image: crypto.image, price: crypto.price, symbol: crypto.symbol },
        }"
        >{{ crypto.name }}</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<!-- Composition API -->

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    console.log('before create');
    store.commit('initialiseStore');

    const cryptos = computed(() => store.state.cryptos);

    const slicedCryptos = computed(() => {
      return Object.entries(store.state.cryptos)
        .slice(0, 3)
        .map((entry) => entry[1]);
    });

    return {
      cryptos,
      slicedCryptos,
    };
  },
};
</script>

<!-- Options API -->

<!-- <script>
export default {
  computed: {
    cryptos() {
      return this.$store.state.cryptos;
    },
    slicedCryptos() {
      return Object.entries(this.cryptos)
        .slice(0, 3)
        .map((entry) => entry[1]);
    },
  },
  beforeCreate() {
    console.log('before create');
    this.$store.commit('initialiseStore');
  },
};
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 40px;
}

nav a {
  padding-right: 20px;
  font-weight: bold;
  color: black;
  font-size: larger;
}

nav a.router-link-exact-active {
  color: chocolate;
}

.banner {
  width: 100%;
  height: 150px;
  background-image: url('@/assets/banner.webp');
  background-position: center;
  background-size: cover;
}
</style>
