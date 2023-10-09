var express = require('express')
var cors = require('cors')
var app = express()
const fetch = require('node-fetch');
require('dotenv').config();

app.use(cors())

app.get('/dolar', function (req, res, next) {
    fetch(process.env.ENDPOINT_DOLAR, {
        "headers": {
          "accept": "*/*",
          "Host": process.env.HOST,
          "authority": process.env.HOST,
          "Postman-Token": "64942976-819f-4634-b7ea-b650eb6d34d3",
          "accept-language": "en-GB,en;q=0.9",
          "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Brave\";v=\"108\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-gpc": "1",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        },
        "body": null,
        "method": "GET"
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        res.json({data});
      });
})

app.get('/euros', function (req, res, next) {
  fetch(process.env.ENDOINT_EURO, {
      "headers": {
        "accept": "*/*",
        "Host": process.env.HOST,
        "authority": process.env.HOST,
        "Postman-Token": "64942976-819f-4634-b7ea-b650eb6d34d3",
        "accept-language": "en-GB,en;q=0.9",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Brave\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
      },
      "body": null,
      "method": "GET"
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      res.json({data});
    });
})

app.get('/commodities', function (req, res, next) {
fetch("https://backend-ifa-production.up.railway.app/api/commodities", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Referer": "https://www.finanzasargy.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    res.json({data});
  });
})


app.get('/usd-blue-chart', function (req, res, next) {
      fetch("https://www.cronista.com/pieces/graphs/data/ric_ARSB__rictype_currency__type_ric/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,es-AR;q=0.8,es;q=0.7,ru;q=0.6",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "vsmajax": "1494991123",
        "cookie": "_cb=C1Oo3ilnKANzyuzy; GN_USER_ID_KEY=725bc3a0-3e10-41c8-88e8-def8f1de7dbf; nvg56882=cd857d4e1888d8a72265f4ab809|2_289; VNCSESSID=20c9e0e867634293a608de3b1e9fd4ce; _gcl_au=1.1.1211994050.1696844185; _gid=GA1.2.1815094944.1696844185; vdev=%7B%22screenWidth%22%3A1600%2C%22screenHeight%22%3A900%2C%22screenColorDepth%22%3A24%2C%22pixelRatio%22%3A1%2C%22touch%22%3Afalse%2C%22vibrate%22%3Atrue%2C%22geolocation%22%3Atrue%2C%22navLang%22%3A%22en-US%22%2C%22battery%22%3Afalse%7D; vdevu=1; _cb_svref=https%3A%2F%2Fwww.google.com%2F; __gads=ID=ed70a2b24a1b36e7:T=1665828935:RT=1696844186:S=ALNI_MbZ9n7Lrh5tQAQ3Xxagk0Oeh5zj9A; __gpi=UID=00000b119560a23a:T=1665828935:RT=1696844186:S=ALNI_MYfANiNc0o0iSDF_yM2FzzlQ0upGw; _fbp=fb.1.1696844187740.1691981058; FCCDCF=%5Bnull%2Cnull%2Cnull%2C%5B%22CPzYJkAPzYJkAEsACCENDaCgAAAAAEPAAAiQAAAQaQD2F2K2kKFgPi2QWYgQBCijYEAhUAAAAkCBIAAgAUgQAgFIIAwAIFAAAAAAAAAQEgCQAAQABAAAIACgAAAQAAIAAAAAAAQQAAAAAIAAAAAAAAEAQAAAAAQAAAAIAABEhCAAQQAEAAAAAAAQAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAgAA.YAAAAAAAAAA%22%2C%221~%22%2C%22E94746CF-5FCE-4C10-B5FC-74BE7AE3C7B8%22%5D%2Cnull%2Cnull%2C%5B%5D%5D; _clck=m3tzmq|2|ffp|0|1377; G_ENABLED_IDPS=google; _clsk=1dhyg3l|1696844311389|2|1|t.clarity.ms/collect; _dc_gtm_UA-117111486-1=1; _ga_PK5V1E1K1X=GS1.1.1696844185.1.1.1696851178.60.0.0; _ga=GA1.1.750206335.1665828932; _chartbeat2=.1665828931938.1696851179365.0000000000000001.UO6zVCm0uAl9iQXZB8v7IKDro_d.114",
        "Referer": "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    })
    .then(response => response.json())
    .then(data => {
      res.json({data});
    });
  })




app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 8081')
})

module.exports = app;