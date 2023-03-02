const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL Connected');
    }
});

module.exports = connection;