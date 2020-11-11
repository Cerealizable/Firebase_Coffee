const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth'); 
const cors = require('cors');

var allowlist = ['http://localhost:3000', 'https://cerealizable.com']

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    console.log('Origin:', req.header('Origin'));
    console.log('CORS FAILED!');
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));
app.options('*', cors());


//* Examples
const {
    helloWorld,
    getHelloWorld
} = require('./api/helloworld')

app.get('/helloworld', helloWorld);
app.get('/helloworlddb', getHelloWorld);

//* Products
const {
    getProduct,
    getAllProducts,
    postProduct,
    editProduct,
    deleteProduct
} = require('./api/products')

app.get('/product/:productId', getProduct);
app.get('/products', getAllProducts);
// Authenticated use
app.post('/product', auth, postProduct);
app.delete('/product/:productId', auth, deleteProduct);
app.put('/product:productId', auth, editProduct);

//* User
const { 
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./api/users')

app.post('/login', loginUser);
app.post('/signup', signUpUser);
// Authenticated use
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);
app.post('/user/image', auth, uploadProfilePhoto);

//* always the last line
exports.api = functions.https.onRequest(app);