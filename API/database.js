const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chuy17915', // Cambia esto por tu contraseña
    database: 'user_management' // Cambia esto por el nombre de tu base de datos
  });

  db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });
  exports.db=db;