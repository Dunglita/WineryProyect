const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM INSTANCIA_VINOS`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Vinos");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql =
    `SELECT * FROM INSTANCIA_VINOS WHERE idBotella = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener el vino especificado");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO INSTANCIA_VINOS(idBotella, estadoBotella, descripcion, año, codVino)
               VALUES(?, ?, ?, ?, ?)`;

  const idBotella = req.body.idBotella;
  const estadoBotella = req.body.estadoBotella;
  const descripcion = req.body.descripcion;
  const año = req.body.año;
  const codVino = req.body.codVino;

  connection.query(
    sql,
    [idBotella, estadoBotella, descripcion, año, codVino],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar el vino");
      } else {
        res.send("Vino agregado");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE INSTANCIA_VINOS 
               SET idBotella=?, estadoBotella=?, descripcion=?, año=?, codVino=?
               WHERE idVino=?`;

  const idBotella = req.body.idBotella;
  const estadoBotella = req.body.estadoBotella;
  const descripcion = req.body.descripcion;
  const año = req.body.año;
  const codVino = req.body.codVino;

  connection.query(
    sql,
    [idBotella, estadoBotella, descripcion, año, codVino],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar el Vino");
      } else {
        res.send("Vino actualizado");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM INSTANCIA_VINOS 
               WHERE idBotella=?`;

  const idBotella = req.body.idBotella;

  connection.query(sql, [idBotella], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar el vino");
    } else {
      res.send("vino eliminado");
    }
  });
});

module.exports = router;
