const {
    getGameDetails,
    getGameScreenshots
} = require('../services/getDetails.service')

const getDetails = async (req, res) => {
    const id = req.params.id
    try {
        if(id) {
            const gameApiDetail = await getGameDetails(id)
            const gameApiScreenshots = await getGameScreenshots(id)
            // console.log(gameApiDetail)

            const gameDetails = {
                ...gameApiDetail, 
                ...gameApiScreenshots }

            res.status(200).json(gameDetails)        
        } else {
            res.json('Game detail not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json()
    }
}

module.exports = {
    getDetails
};