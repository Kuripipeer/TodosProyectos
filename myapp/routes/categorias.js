const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const { connection } = require('../config.db');

const getCategorias = (req, res) => {
    connection.query("SELECT * FROM tb_categorias",
    (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results);
    });
}

app.route('/categorias').get(getCategorias);

module.exports = app;