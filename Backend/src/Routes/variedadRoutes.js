const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM VARIEDAD`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Variedades");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM VARIEDAD WHERE idVariedad = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la variedad especificada");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO VARIEDAD(idVariedad, nombreVariedad, tipoVariedad)
               VALUES(?, ?, ?)`;

  const idVariedad = req.body.idVariedad;
  const nombreVariedad = req.body.nombreVariedad;
  const tipoVariedad = req.body.tipoVariedad;

  connection.query(
    sql,
    [idVariedad, nombreVariedad, tipoVariedad],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar la variedad");
      } else {
        res.send("Variedad agregada");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE VARIEDAD 
               SET idVariedad=?, nombreVariedad=?, tipoVariedad=?
               WHERE idVariedad=?`;

  const idVariedad = req.body.idVariedad;
  const nombreVariedad = req.body.nombreVariedad;
  const tipoVariedad = req.body.tipoVariedad;

  connection.query(
    sql,
    [idVariedad, nombreVariedad, tipoVariedad],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar la variedad");
      } else {
        res.send("Variedad actualizada");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM VARIEDAD 
               WHERE idVariedad=?`;

  const idVariedad = req.body.idVariedad;

  connection.query(sql, [idVariedad], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la variedad");
    } else {
      res.send("Variedad eliminada");
    }
  });
});

module.exports = router;
