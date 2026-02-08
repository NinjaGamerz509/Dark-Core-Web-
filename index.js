const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Configuration endpoint
app.get('/config', (req, res) => {
    res.json(config);
});

// Fallback to index.html for SPA behavior if needed, 
// though not strictly required for this layout.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Dark Core website running on port ${PORT}`);
});
