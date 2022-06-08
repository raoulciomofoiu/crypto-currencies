<template>
  <div class="app">
    <div class="banner"></div>
    <nav>
      <router-link :to="{ name: 'CryptoList' }">Main Page</router-link>
      <router-link :to="{ name: 'Wallet' }">Wallet</router-link>
    </nav>
    <router-view />
  </div>
</template>

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
