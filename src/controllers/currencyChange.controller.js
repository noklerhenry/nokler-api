const { currencyRates } = require('../services/currencyApi.service')

const changeCurrency = async (req, res) => {
    try {
        const ratesApi = await currencyRates()
    
        const conversionRates = {
            USD: ratesApi.USD,
            ARS: ratesApi.ARS,
            EUR: ratesApi.EUR,
            JPY: ratesApi.JPY,
            GBP: ratesApi.GBP,
            AUD: ratesApi.AUD
        }
    
        res.status(200).send(conversionRates)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)       
    }

};

module.exports = {changeCurrency}