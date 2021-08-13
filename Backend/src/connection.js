const mysql = require(`mysql`);

//Informacion para conectar a BD
const connection = mysql.createConnection({
  //Direccion de la base de datos
  host: `localhost`,
  //FIXME: Crear usuario no root
  user: `root`,
  password: ``,
  database: `winery`,
});
//Conneccion a BD
connection.connect((err) => {
  if (err) {
    console.log("Error al conectar a la base de datos");
  } else {
    console.log("Conectado a la base de datos");
  }
});
module.exports = connection;
