const express = require('express'),
  path = require('path'),
  cors = require('cors'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  config = require('./config/database'),
  multer = require('multer')

const data = require('./data/index')

require('./config/passport')(passport);
mongoose.connect(config.database, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(passport.initialize());

app.get('/', function (req, res) {
  res.send('Page under construction.');
});

// Calling routes
let authentication = require('./routes/auth');

// Using routes
app.use('/api', authentication);

app.use(express.static('public'))


//GET : /api/listings
app.get("/api/listings", (req, res) => {
  res.json(data.listings)
})


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/assets/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
});

//POST :  /api/listings
app.post('/api/listings', upload.single('images'), (req, res, next) => {
  console.log(req.file)
  let listing = {
    id: data.listings.length + 1,
    title: req.body.title,
    price: req.body.price,
    image: `http://172.20.10.3:8080/assets/${req.file.filename}`
  }
  data.listings.unshift(listing)
  res.json(listing)
})


//----------------------------------------------------------------

/**
 * End Server Routes
 */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
