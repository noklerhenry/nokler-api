const { Router } = require("express");
const router = Router();

const checkOut = require('./checkOut.routes.js')
const searchGames = require('./searchByName.routes.js');
const getDetails = require('./getDetails.routes')
const getAllGames = require('./getAllGames.routes.js')
const userSearch = require('./userSearch.routes.js')
const filterByGenre = require('./filterByGenre.routes.js')
const platformFilter = require("./filterByPlatform.routes.js")
const filterByRegion = require("./filterByRegion.routes.js")
const createProduct = require('./products.routes.js')
const filterAcum = require("./filtersAcum.routes.js")
const filterByStore = require('./filterByStore.routes.js')
const genreList = require('./getGenres.routes.js')
const storeList = require('./getStores.routes.js')
const platformList = require('./getPlatforms.routes.js')

//Import de routers:

//All games
router.use('/allGames', getAllGames)

//Search games: 1-DB ; 2-API **ADMIN**
router.use('/searchByName', searchGames)

//Search games DB **USER**
router.use('/userSearch', userSearch)

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

//getGenres

router.use("/genreList", genreList)

//getStores
router.use("/storeList", storeList)

//getPlatforms
router.use("/platformList", platformList)





module.exports = router;