const app = require('express')();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());

const endpoint = '/api/v1/'
app.get(endpoint + 'quote', (req, res) => {
    let quotes = require('./RonSwansonQuotes.json');
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).send(quote)
});

app.listen(
    PORT,
    () => console.log(`Server is running on port http://localhost:${PORT}`)
)
