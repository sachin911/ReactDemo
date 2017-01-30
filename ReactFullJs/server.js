// import config, { nodeEnv } from './config';
// import http from 'http';

// const server = http.createServer((req,res) => {
//     res.write("hello man!, Server is runnig\n");
//     setTimeout(() => {
//         res.write("after the timeout this is the new message");
//         res.end();
//     },3000);
// });


// server.listen(8080);


//creating the server using the express
//

import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';

const server = express();

server.get('/', (req,res) => {
    res.send('Express server is up!. this is the server response');
});

//the below is the boilerplate code to service the url to an actual html page
//instead, we can make use of the express library to handle the routing tasks for us

// server.get('/about.html', (req,res) => {
//     fs.readFile('./about.html', (err,data) => {
//         res.send(data.toString());
//     });
// });


//express way of routing is below

server.use('./api', apiRouter);
server.use(express.static('public'));

server.listen(config.port,() => {
    console.info('express is listening on port', config.port);
});