app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
    })