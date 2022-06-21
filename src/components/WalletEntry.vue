<template>
  <div class="entry">
    {{ crypto.name }} ~
    {{ crypto.amount }}
    {{ crypto.symbol }}
    &nbsp; &nbsp;
    <input type="number" v-model.number="sellValue" />
    <button @click="sellCrypto(crypto, sellValue)">SELL</button>
  </div>
</template>

<!-- Composition API -->

<script>
import { ref } from 'vue';

export default {
  props: {
    crypto: Object,
    sellCrypto: Function,
  },
  setup() {
    const sellValue = ref(0);

    return {
      sellValue,
    };
  },
};
</script>

<!-- Options API -->

<!-- <script>
export default {
  props: ['crypto', 'sellCrypto'],
  data() {
    return {
      sellValue: 0,
    };
  },
};
</script> -->

<style scoped>
.entry {
  padding: 3px;
  font-size: x-large;
}
button {
  width: 50px;
  margin-left: 7.5px;
}
input {
  width: 75px;
}
</style>
