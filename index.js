const express = require('express');
const path = require('path');
const app = express();

// Railway port uthaye ga ya default 3000
const port = process.env.PORT || 3000;

// Current folder ki sari files (HTML, CSS, Images) ko public kar do
app.use(express.static(__dirname));

// Jab koi main website khole, to "settings.html" dikhao
// (Agar ap chahtay hain koi aur file khulay to 'settings.html' ki jaga uska naam likh den)
app.get('/', (req, res) => {
    // Check karain agar settings.html majood hai
    res.sendFile(path.join(__dirname, 'settings.html')); 
});

// Server start karo
app.listen(port, () => {
    console.log(`Website is live on port ${port}`);
});
