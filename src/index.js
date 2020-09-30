const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
const envVar = process.env.TEST_ENV_VAR

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello world - Updated</h1>
        <h2>Env var value: ${envVar}</h2>
    `)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})