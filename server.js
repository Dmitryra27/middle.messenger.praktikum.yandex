const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.use('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use((req, res, next) => {
	res.setHeader('Content-Security-Policy', "default-src 'self'");
	next();
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}!`);
});

