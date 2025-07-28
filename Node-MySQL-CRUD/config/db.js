const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Jay@88kumar',
    database : "student_db",

})

module.exports = mySqlPool;