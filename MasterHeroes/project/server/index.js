const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

require('./database/mongodb')

const app = express()

app.mongo = mongoose
app.use(bodyParser.json())
app.use(routes)




app.listen(3000)