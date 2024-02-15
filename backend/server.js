const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
cors = require('cors'); // cros orgin 
bodyParser = require('body-parser');

dbConfig = require('./database/db');

// for database connect with mongoose 

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useUnifiedTopology: true, useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected')
},
    error => {
        console.log('Database could not be connected: ' + error)
    }
)

// Setup Express.js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// cross origin error replace
app.use(cors());
app.use(express.static(__dirname));


const user = require('./routes/userRoutes');
app.use('/', user);





const port = process.env.PORT || 4004;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Error
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});




