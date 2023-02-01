const express = require('express');

const app = express();

app.get('/users', function () {
    console.log('Hello!');
});


app.listen(9999);
