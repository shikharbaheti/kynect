const express = require('express');
const app = express();
const axios = require('axios');
const querystring = require('querystring');

// axios.post('https://www.linkedin.com/oauth/v2/accessToken', querystring.stringify({
//     // auth: {

//     // },
//     params: {
//         grant_type: "client_credentials",
//         client_id: LinkClientID,
//         client_secret: LinkClientSecret
//         // 'content-type': 'application/x-www-form-urlencoded',
//     }
// }))
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// axios
//     .post("https://www.linkedin.com/oauth/v2/accessToken", querystring.stringify({
//         grant_type: "client_credentials",
//         client_id: LinkClientID,
//         client_secret: LinkClientSecret
//     }));
// const createFormParams = (params) => {
//     return Object.keys(params)
//         .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//         .join('&')
// }

// const data = LinkClientID + ":" + LinkClientSecret;
// const X = data.toString('base64');

// axios({
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         // 'X-API-Key': process.env.API_KEY,
//         'Authorization': 'Basic ' + X
//     },
//     method: 'POST',
//     url: "https://www.linkedin.com/oauth/v2/accessToken",
//     data: createFormParams({
//         grant_type: 'authorization_code',
//         client_id: LinkClientID,
//         // code: requestToken
//     })
// }).then(response => {
//     console.log(response);
// }).catch(err => {
//     console.error(err);
// });

// app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.get("/jobSearch", (req, res) => {
    res.sendFile(__dirname + '/results.xls');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);
});