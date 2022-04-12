const express = require('express')
const app = express()
const port = 3001

let Parser = require('rss-parser');
let parser = new Parser();

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.get('/', (request, response) => {
    let feed;

    (async () => {

        rss = await parser.parseURL('https://ria.ru/export/rss2/archive/index.xml');
        feed = rss.items;
        feed.length = 20;


        //console.log(feed)
        response.send(feed)
      })();

   
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})