const mysql = require('mysql2');

const mysqlConfig = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'perlego_test_db',
});

const mysqlConnection = mysqlConfig.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = {
  mysqlConnection,
  mysqlConfig
};
