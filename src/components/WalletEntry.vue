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

<script>
export default {
  props: ['crypto', 'sellCrypto'],
  data() {
    return {
      sellValue: 0,
    };
  },
};
</script>

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
