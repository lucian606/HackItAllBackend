var express = require('express');
var router = express.Router();
const https = require('https')
const request = require('request')
const apiKey = 'AntRAR1JFG5z4ySwr6sKo7U6iSLwOZiD5b8vSpfA'
const headers = {
    'Accept': 'application/json',
    'X-API-KEY': apiKey
}


router.get('/autocomplete', (req, res) => {
    let query = req.query.query
    const url = 'https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=' + query 

    https.get(url, {headers: headers}, apiRes => {
        let data = []
    
        apiRes.on('data', chunk => {
            data.push(chunk);
        })
    
        apiRes.on('end', () => {
            res.send(JSON.parse(Buffer.concat(data).toString()))
        })
    })
});

router.get('/trending', (req, res) => {
    let region = req.query.region
    const url = 'https://yfapi.net/v1/finance/trending/' + region 

    https.get(url, {headers: headers}, apiRes => {
        let data = []
    
        apiRes.on('data', chunk => {
            data.push(chunk);
        })
    
        apiRes.on('end', () => {
            res.send(JSON.parse(Buffer.concat(data).toString()))
        })
    })
});

router.get('/chart', (req, res) => {
    let stock = req.query.stock
    let range = req.query.range;
    let region = req.query.region;
    let interval = req.query.interval;
    let lang = req.query.lang;
    let events = req.query.events;

    let params = '/' + stock + '?range=' + range + '&region=' + region + '&interval=' + interval + '&lang' + lang + '&events' + events

    const url = 'https://yfapi.net/v8/finance/chart' + params

    https.get(url, {headers: headers}, apiRes => {
        let data = []
    
        apiRes.on('data', chunk => {
            data.push(chunk);
        })
        
        apiRes.on('end', () => {
            res.send(JSON.parse(Buffer.concat(data).toString()))
        })
    })
});

module.exports = router