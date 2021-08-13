const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM USUARIOS`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener usuarios");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM USUARIOS WHERE idUsuario = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener el usuario especificado");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO USUARIOS(idUsuario, user, password, dniEmpleado)
               VALUES(?, ?, ?, ?)`;

  const idUsuario = req.body.idUsuario;
  const user = req.body.user;
  const password = req.body.password;
  const dniEmpleado = req.body.dniEmpleado;

  connection.query(
    sql,
    [idUsuario, user, password, dniEmpleado],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar el usuario");
      } else {
        res.send("Usuario agregado");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE USUARIOS 
               SET idUsuario=?, user=?, password=?, dniEmpleado=?
               WHERE idUsuario=?`;

  const idUsuario = req.body.idUsuario;
  const user = req.body.user;
  const password = req.body.password;
  const dniEmpleado = req.body.dniEmpleado;

  connection.query(
    sql,
    [idUsuario, user, password, dniEmpleado],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar usuario");
      } else {
        res.send("Usuario actualizado");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM USUARIOS 
               WHERE idUsuario=?`;

  const idUsuario = req.body.idUsuario;

  connection.query(sql, [idUsuario], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar el usuario");
    } else {
      res.send("Usuario eliminado");
    }
  });
});

module.exports = router;
