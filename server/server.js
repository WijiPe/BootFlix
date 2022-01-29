// IMPORT PACKAGES
const express = require('express');
const app = express();
const cors = require('cors')
const cookies = require('cookie-parser')
port = 8000

// CONFIG MONGOOSE
require("./config/mongoose.config");

// CONFIG EXPRESS
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
})) // Having 2 localhost port to communicate


app.use(cookies())
app.use(express.json(), express.urlencoded({ extended: true }))  // POST METHOD

// ROUTES
// require("./routes/BootFlix.routes")(app)

// PORT
app.listen(8000, () => console.log(`Listening on port: port`));
