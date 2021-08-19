const express = require('express');
const { promises: fs } = require('fs');
const { join } = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const file = await fs.readFile(join(__dirname, 'data/log.txt'), 'utf-8');

        if (file) {
            await fs.appendFile('data/log.txt', '\nNew line');
        }
    } catch (err) {
        console.log(err);
    }

    res.send('Hello Docker');
});

app.get('/docker', async (req, res) => {
    try {
        await fs.writeFile('./data/log.txt', 'Hello Docker', )
    } catch (err) {
        console.log(err);
    }

    res.send('Saved');
});

app.listen(port, () => {
    console.log(`Server started on port: "${port}"`);
});
