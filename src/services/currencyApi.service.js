const axios = require('axios');

const CURRENCY_URL_API = process.env.CURRENCY_URL_API


const currencyRates =  async () => {
    const resp = await axios.get(CURRENCY_URL_API)
    const rates = resp.data.conversion_rates    
    return rates
}

module.exports = {
    currencyRates,
};