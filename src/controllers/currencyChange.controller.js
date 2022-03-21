const { currencyRates } = require('../services/currencyApi.service')

const changeCurrency = async (req, res) => {
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

};

module.exports = {changeCurrency}