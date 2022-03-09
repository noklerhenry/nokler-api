const { Router } = require("express");
const router = Router();

const gameSearchApi = require('./gameSearchApi.routes.js');
const getDetails = require('./getDetails.routes')
const getAllGames = require('./getAllGames.routes.js')
const gameSearchDB = require('./gameSearchDB.routes.js')
const filterByGenre = require('./filterByGenre.routes.js')
const platformFilter = require("./filterByPlatform.routes.js")
const filterByRegion = require("./filterByRegion.routes.js")
const createProduct = require('./products.routes.js')
const filterAcum = require("./filtersAcum.routes.js")
const filterByStore = require('./filterByStore.routes.js')
const checkOut = require('./checkOut.routes.js')
const editPost = require('./editPost.routes')

//Import de routers:

//All games
router.use('/allGames', getAllGames)

//Search games API **ADMIN**
router.use('/gameSearchApi', gameSearchApi)
 
// Edit posts **ADMIN**
router.use('/edit', editPost)

//Search games DB **USER**
router.use('/gameSearchDB', gameSearchDB)

//Get game details
router.use('/details', getDetails)


//Filter by genre
router.use("/filterByGenre",filterByGenre)


// Filter by platform
router.use('/filterByPlatform', platformFilter)

//Filter by region
router.use('/filterByRegion', filterByRegion)

//Post product
router.use('/product', createProduct)

//FilterAcum
router.use('/filterAcum', filterAcum)

//Filter by Store
router.use("/filterByStore", filterByStore)

//Checkout

router.use("/checkOut", checkOut)



module.exports = router;