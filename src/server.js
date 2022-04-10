import dotenv from 'dotenv';
import express from 'express';
import { locationRouter } from './routes/location.js';

dotenv.config({ silent: true });
var app = express();
var api = "/geocode/v1";

app.use(api+"/health", (req, res) => {
    res.status(200).send("Ok");
});

app.use( api+"/location", locationRouter);

var server=app.listen((process.env.API_LISTEN_PORT || 5000), () => {
    console.log("The address geocoding API is listening on: "+server.address().port);
});