const express = require('express');
const volleyball = require('volleyball');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const apiRouter = require('./routes/apiRouter');
const mafiasRouter = require('./routes/mafiasRouter');
const testRouter = require('./routes/testRouter');
const errorHandler = require('./middlewares/errorHandler');

const app = express(); // create the express app instance

// Connect to MongoDB
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error.message);
	});

app.use(express.json());
app.use(volleyball);
app.use(helmet());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
	res.json({ message: 'Hello, World' });
});

app.use('/api/v1', apiRouter);

app.use('/mafias', mafiasRouter);
app.use('/tests', testRouter);

app.use(errorHandler); // use the errorHandler middleware

module.exports = app;
