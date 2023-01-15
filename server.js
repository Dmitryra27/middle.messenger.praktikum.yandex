const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('./static/'));

app.get('/', (req, res) => {
    res.render('static/index.html', {});
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});