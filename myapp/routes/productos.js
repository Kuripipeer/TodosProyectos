const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const { connection } = require('../config.db');

const getProductos = (req, res) => {
    connection.query("SELECT * FROM tb_productos",
    (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results);
    });
}

app.route('/productos').get(getProductos);

module.exports = app;