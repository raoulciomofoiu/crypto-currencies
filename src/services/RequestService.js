import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.cryptowat.ch/markets/binance',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
})

export default {
    getCryptos() {
        return apiClient.get('/cryptos')
    },
    getCrypto(id) {
        return apiClient.get('/crypto/' + id)
    }
}