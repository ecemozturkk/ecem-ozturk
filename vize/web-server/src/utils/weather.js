const request = require('request');
const API_KEY = 'bc6b04f47b422fdcf6b4ada5ba88d3d0'
const weather = (enlem, boylam, callback) => {
    const URL = 'http://api.weatherstack.com/current?access_key='+API_KEY+'&query=' + enlem + ',' + boylam + '&units=m';

    request({url: URL, json: true}, (err, res, body) => {
        if(err){
            callback('Hatali yer', undefined);
        }
        callback(undefined, body.current)
    })

}
module.exports = weather;