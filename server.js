const express = require('express');
const cors = require("cors");
const routes = require('./routes/users');

const port = 3000;
const app = express();
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});