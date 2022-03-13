const { Router } = require("express");
const router = Router();

const gameSearchApi = require('./gameSearchApi.routes.js');
const getDetails = require('./getDetails.routes.js')
const getAllGames = require('./getAllGames.routes.js')
const gameSearchDB = require('./gameSearchDB.routes.js')
const filterByGenre = require('./filterByGenre.routes.js')
const platformFilter = require("./filterByPlatform.routes.js")
const filterByRegion = require("./filterByRegion.routes.js")
const createProduct = require('./products.routes.js')
const filterAcum = require("./filtersAcum.routes.js")
const filterByStore = require('./filterByStore.routes.js')
const genreList = require('./getGenres.routes.js')
const storeList = require('./getStores.routes.js')
const platformList = require('./getPlatforms.routes.js')
const checkOut = require('./checkOut.routes.js')
const editPost = require('./editPost.routes.js')
const deletePost = require('./deletePost.routes.js')
const getProductById = require('./getProductById.routes.js')
const test = require('./testmail.routes')
const getAllProducts = require('./getProducts.route')


//Import de routers:


//INFO DE JUEGOS

//All games -> Trae todos los juegos de la DB
router.use('/allGames', getAllGames)

//Search games DB -> busca por nombre en la DB   /gameSearchDB?name=
router.use('/gameSearchDB', gameSearchDB)

//Search games API -> busca todos los juegos de la API   /gameSearchApi?name=
router.use('/gameSearchApi', gameSearchApi) 

//Get game details -> trae todos los detalles de un juego de la API   /details/:id
router.use('/details', getDetails)



// FILTROS

//Filter by genre
router.use("/filterByGenre",filterByGenre)

// Filter by platform
router.use('/filterByPlatform', platformFilter)

//Filter by region
router.use('/filterByRegion', filterByRegion)

//Filter by Store
router.use("/filterByStore", filterByStore)

//FilterAcum
router.use('/filterAcum', filterAcum)



//ADMIN

//Post product -> Creacion de productos  (se le pasa data por body)
router.use('/product', createProduct)

//Get Products -> trae TODOS los productos creados, con su info completa.
router.use('/getProducts', getAllProducts)

//getProductById -> trae UN producto en particular con su info completa.  /getProductById?ids=
router.use("/getProductById", getProductById)

// Edit posts -> edita informacion de un producto por ID   /edit/:id (id del producto)
router.use('/edit', editPost)

// Delete posts  -> borra post por ID   /delete/:id  (id del producto)
router.use('/delete', deletePost)

//getProduct -> Paginacion de productos.
router.use('/product', createProduct)



//DB LOAD

//getGenres
router.use("/genreList", genreList)

//getStores
router.use("/storeList", storeList)

//getPlatforms
router.use("/platformList", platformList)




//Checkout
router.use("/checkOut", checkOut)

//Nodemailer  -> testeo del servicio de email
router.use('/test', test)




module.exports = router;