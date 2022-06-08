<template>
  <router-link 
    :to="{ name: 'CryptoDetails', params: { id: crypto.id, name: crypto.name, image: crypto.image, price: crypto.price, marketCap: crypto.marketCap }}"
    class="crypto-link">
    <div class="crypto-card">
      <p style="font-style: italic; font-size:larger; font-weight:bold; color:crimson">{{ crypto.name }}</p>
      <img :src="require(`../assets/${crypto.image}`)" alt="">
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    crypto: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.crypto-link {
  color: #2c3e50;
  text-decoration: none;
}
.crypto-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
