const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'imageGallery2.html'));
});

app.post('/search', async (req, res) => {
    const { keyword, numImages } = req.body;
    const numImagesParsed = parseInt(numImages, 10);
    if (!keyword || isNaN(numImagesParsed) || numImagesParsed < 2) {
        return res.status(400).send('Invalid input: Keyword cannot be empty, and number of images must be at least 2.');
    }

    const apiKey = '47101863-ffb6a4f7b2a81e6c2f8433ba9';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(keyword)}&per_page=${numImagesParsed}`;

    try {
        const response = await axios.get(apiUrl);
        const images = response.data.hits;

        if (images.length === 0) {
            return res.status(404).send('No images found for the given keyword.');
        }

        res.render('imageGallery3', { images });
    } catch (error) {
        console.error('Error fetching data from Pixabay:', error.message);
        res.status(500).send('Failed to fetch images from Pixabay.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
