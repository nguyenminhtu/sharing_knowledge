const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

connection.connect(error => {
  if (error) {
    console.log("Error when connection to mysql database: ", error);
    return;
  }

  console.log("Connect to mysql database successfully !");
});

module.exports = connection;
