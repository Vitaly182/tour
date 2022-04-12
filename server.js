const express = require('express')
const app = express()
// const PORT : string|number = process.env.PORT || 5000;
const PORT = process.env.PORT || 3000;

app.use(express.static('build'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

// app.use("*",(req, res) =>{
//     res.send("<h1>Welcome to your simple server! Awesome right</h1>");
// });

// app.listen(PORT,() => console.log(`hosting @${PORT}`));