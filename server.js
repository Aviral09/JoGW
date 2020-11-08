const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const fs = require('fs');
const servePage = require('./util/servePage');

require('./dbconfig/connect')();

const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());

// CORS Handler
app.use((req,res,next) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', '*');
	res.set('Access-Control-Allow-Methods', '*');
	if(req.method === 'OPTIONS'){
		res.status(200).end();
		return;
	}
	next();
});

app.use(express.static('public'));

app.get('/', (req,res,next) => {
	try{
		servePage(res,'./public/index.html');
	} catch(err){ next(err); }
	
});

// APIs

// 404 Handler
app.use((req,res,next) => {
	try{
		servePage(res,'./public/404.html');
	} catch(err){ next(err); }
});

// Final error handler
app.use((err,req,res,next) => {
	res
	.status(err.status || 500)
	.json({
		error: err.message
	});
});

// Run the server
const port = process.env.PORT || 3000;
app.listen({
	port, 
	host: '0.0.0.0'
}, () => {
	console.log(`Server running on port: ${port}`);
});