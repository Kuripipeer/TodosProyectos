const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/productos'));
app.use(require('./routes/categorias'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

