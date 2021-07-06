// JavaScript source code
const express = require('express');
const app = express();
const fetch = require('node-fetch')

app.get('getUser/:username', (req, res) => {
    const name = req.params.username;
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => res.send(data))
})


const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})