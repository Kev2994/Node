// JavaScript source code
const express = require('express');
const app = express();
const fetch = require('node-fetch');

var obj;
fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => obj = data);

app.get('/getUser/:username', (req, res) => {

    const userInfo = obj.find(el => el.username === req.params.username);
    res.status(200).json(userInfo);

});

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});