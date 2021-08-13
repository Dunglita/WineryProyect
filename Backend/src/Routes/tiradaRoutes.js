const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM TIRADA`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Tirada");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM TIRADA WHERE idTirada = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la tirada especificado");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO TIRADA(idTirada, estadoTirada, descripcion, año, idVariedad)
               VALUES(?, ?, ?, ?, ?)`;

  const idTirada = req.body.idTirada;
  const estadoTirada = req.body.estadoTirada;
  const descripcion = req.body.descripcion;
  const año = req.body.año;
  const idVariedad = req.body.idVariedad;

  connection.query(
    sql,
    [idTirada, estadoTirada, descripcion, año, idVariedad],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar la tirada");
      } else {
        res.send("Tirada agregada");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE TIRADA 
               SET idTirada=?, estadoTirada=?, descripcion=?, año=?, idVariedad=?
               WHERE idTirada=?`;

  const idTirada = req.body.idTirada;
  const estadoTirada = req.body.estadoTirada;
  const descripcion = req.body.descripcion;
  const año = req.body.año;
  const idVariedad = req.body.idVariedad;

  connection.query(
    sql,
    [idTirada, estadoTirada, descripcion, año, idVariedad, idTirada],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar la tirada");
      } else {
        res.send("Tirada actualizada");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM TIRADA 
               WHERE idTirada=?`;

  const idTirada = req.body.idTirada;

  connection.query(sql, [idTirada], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la tirada");
    } else {
      res.send("Tirada eliminada");
    }
  });
});

module.exports = router;
