import app from './api.js';

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Ok!');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});