<template>
  <div class="details">
    <h1>
      <span>
        <img :src="require(`../assets/${image}`)" alt="">
      </span>
      {{ name }}
    </h1>
    <h3>{{ symbol }} price: {{ price }} $</h3>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'image', 'price', 'symbol']
}
</script>

<style scoped>
img {
  width: 30px;
  height: auto;
}
.details {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
