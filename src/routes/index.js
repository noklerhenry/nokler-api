const { Router } = require("express");
const router = Router();

const gameSearchApi = require('./Games/gameSearchApi.routes.js');
const getDetails = require('./Games/getDetails.routes.js')
const getAllGames = require('./Games/getAllGames.routes.js')
const gameSearchDB = require('./Games/gameSearchDB.routes.js')
const filterByGenre = require('./Filters/filterByGenre.routes.js')
const platformFilter = require("./Filters/filterByPlatform.routes.js")
const filterByRegion = require("./Filters/filterByRegion.routes.js")
const createProduct = require('./Products/products.routes.js')
const filterAcum = require("./Filters/filtersAcum.routes.js")
const filterByStore = require('./Filters/filterByStore.routes.js')
const genreList = require('./Games/getGenres.routes.js')
const storeList = require('./Games/getStores.routes.js')
const platformList = require('./Games/getPlatforms.routes.js')
const checkOut = require('./checkOut.routes.js')
const editPost = require('./Products/editPost.routes.js')
const deletePost = require('./Products/deletePost.routes.js')
const getProductById = require('./Products/getProductById.routes.js')
const getProductByGame = require('./Products/getProductByGame.routes.js')
const test = require('./testmail.routes')
const getAllProducts = require('./Products/getProducts.route')
const users = require ("./Users/users.routes.js")
const editKey = require('./Products/editKey.routes.js')
const addKey = require('./Products/addKey.routes.js')
const deleteKey = require('./Products/deleteKey.routes.js')
const getOrders = require ("./Users/getOrders.routes.js")
const contactFormMail = require('./contactFormMail.routes');
const  currencyRate  = require("./currencyRates.routes");
const getUserByEmail = require("./Users/getUserByEmail.routes")


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

//Users
router.use('/users', users )
router.use("/getUserByEmail", getUserByEmail)

//Send mail ContactUs form
router.use('/contactMail', contactFormMail)

//Orders -> trae info de todas las compras
router.use("/getOrders", getOrders)


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

//getProductByGame
router.use("/getProductByGame", getProductByGame)

//editKeys
router.use('/editKey', editKey)

//addKey
router.use('/addKey', addKey)

//deleteKey
router.use('/deleteKey', deleteKey)

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

//Currency rates
router.use('/currencyRates', currencyRate)



module.exports = router;