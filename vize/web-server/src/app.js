const express = require('express')
const app = express();
const fs = require('fs')
const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js');


const PORT = process.env.PORT || 3000

app.get("/test_text",(req,res)=>{


    
    res.send("<p>Ecem Ozturk</p>")

})

app.get('/', (req ,res) => {
    res.send('Welcome Page is here !')
});

app.get("/test_json",(req,res)=>{

    const dataBuffer = fs.readFileSync("./test_json.json")
    const dataBufferString = dataBuffer.toString()
    const dataJSON = JSON.parse(dataBufferString)
    
    res.send(dataJSON)

})


app.get('/weather', (req, res) => {
    // res.send(req.query.city);
    geocode(req.query.city, (err, {enlem, boylam, konum}) => {
        if(err){
            return res.send(err);
        } else {
            weather(enlem, boylam, (err, data) => {
                if(err){
                    return res.send(err);
                }

                //console.log(body)

                 const showData = {
                     sicaklik : data.temperature,
                     
                     basinc : data.pressure,
                     nem : data.humidity
                 }

                res.send(showData);
            })
        }
    })
})


const ogrenci_no = "18360859031"
app.get('/test_text', (ogrenci_no) => {res.send(ogrenci_no)})
const isimSoyisim = 


app.get('/test_html', (req, res) => {})
app.get('/test_test_json', (req, res) => {})
app.get('/test_weather', (req, res) => {})














app.listen(PORT, () => {
    console.log("Server is up on port : "+ PORT)
})


































