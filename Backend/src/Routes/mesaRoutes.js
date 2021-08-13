const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM MESA`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Mesas");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM MESA WHERE idMesa = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la mesa especificada");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO MESA(idMesa, cantidadSillas, ubicacion)
               VALUES(?, ?, ?)`;

  const idMesa = req.body.idMesa;
  const cantidadSillas = req.body.cantidadSillas;
  const ubicacion = req.body.ubicacion;

  connection.query(sql, [idMesa, cantidadSillas, ubicacion], (err, result) => {
    if (err) {
      res.send("No se pudo agregar la mesa");
    } else {
      res.send("Mesa agregada");
    }
  });
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE MESA 
               SET idMesa=?, cantidadSillas=?, ubicacion=?
               WHERE idMesa=?`;

  const idMesa = req.body.idMesa;
  const cantidadSillas = req.body.cantidadSillas;
  const ubicacion = req.body.ubicacion;

  connection.query(sql, [idMesa, cantidadSillas, ubicacion], (err, result) => {
    if (err) {
      res.send("Error al actualizar la mesa");
    } else {
      res.send("Mesa actualizada");
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM MESA 
               WHERE idMesa=?`;

  const idMesa = req.body.idMesa;

  connection.query(sql, [idMesa], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la mesa");
    } else {
      res.send("Mesa eliminada");
    }
  });
});

module.exports = router;
