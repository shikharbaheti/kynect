const express = require('express');
const app = express();
const axios = require('axios');
const querystring = require('querystring');


// LINKEDIN API
LinkClientID = "86e1sthxzjxo1u"
LinkClientSecret = "1C9G59hmnXZdYdAH"

url1 = "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=" + LinkClientID + "&client_secret=" + LinkClientSecret + "&code=AQTuhyjgFOsM44ERhNUrXeVYwKzPLFU8fFArQzrfjtW-UR2ulBM9Hhu1GLJqf5LODx7jRyf7_ocriMiDVtH9uPG_tRRe0B3hx5YZnP5b28gwbD-ioUaYQIeXZTFp_qGjyU5fO4xPrKPSHPxMmCjOLz1vOgkywOTrLYGLz4wWqIi8qOg0FuVEonWGh4pQ2A&redirect_uri=http://localhost:3001"

url2 = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=" + LinkClientID + "&scope=r_liteprofile&state=123456&redirect_uri=http://localhost:8080/callback"

console.log(url2)

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


axios.get('https://www.linkedin.com/oauth/v2/authorization', {
    params: {
        response_type: "code",
        client_id: LinkClientID,
        redirect_uri: "http://localhost:8080",
        state: "DCEeFWf43A53sd8Kef424",
        scope: "r_liteprofile%20r_emailaddress%20w_member_social",
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

const accessToken = 'YOUR_ACCESS_TOKEN';
const options = {
    host: 'api.linkedin.com',
    path: '/v2/me',
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0'
    }
};


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);
});