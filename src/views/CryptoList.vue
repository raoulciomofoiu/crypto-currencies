<template>
  <h1>Top 10 Crypto Currencies</h1>
  <div class="cryptos">
    <CryptoCard v-for="crypto in cryptos" :key="crypto.id" :crypto="crypto"/>
  </div>
</template>

<script>
import CryptoCard from "@/components/CryptoCard.vue";
import { v4 as uuidv4 } from 'uuid';


export default {
  name: "CryptoList",
  data() {
    return {
      cryptos: [
        {
          id: uuidv4(),
          name: 'Bitcoin',
          image: 'bitcoin.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'Ethereum',
          image: 'ethereum.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'Tether',
          image: 'usdt.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'USD Coin',
          image: 'usdc.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'BNB',
          image: 'bnb.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'Cardano',
          image: 'ada.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'XRP',
          image: 'xrp.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'Binance USD',
          image: 'busd.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'Solana',
          image: 'sol.png',
          price: 30000,
          marketCap: 1000000000
        },
        {
          id: uuidv4(),
          name: 'Dogecoin',
          image: 'doge.png',
          price: 30000,
          marketCap: 1000000000
        }
      ]
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