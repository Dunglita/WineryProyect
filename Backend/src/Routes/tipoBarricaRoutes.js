const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM TIPO_BARRICA`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Barricas");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM TIPO_BARRICA WHERE codBarrica = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la Barrica especificada");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO TIPO_BARRICA(codBarrica, capacidad, material, idTirada)
               VALUES(?, ?, ?, ?)`;

  const codBarrica = req.body.codBarrica;
  const capacidad = req.body.capacidad;
  const material = req.body.material;
  const idTirada = req.body.idTirada;

  connection.query(
    sql,
    [codBarrica, capacidad, material, idTirada],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar la Barrica");
      } else {
        res.send("Barrica agregada");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE TIPO_BARRICA 
               SET codBarrica=?, capacidad=?, material=?, idTirada=?
               WHERE codBarrica=?`;

  const codBarrica = req.body.codBarrica;
  const capacidad = req.body.capacidad;
  const material = req.body.material;
  const idTirada = req.body.idTirada;

  connection.query(
    sql,
    [codBarrica, capacidad, material, idTirada],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar Barrica");
      } else {
        res.send("Barrica actualizada");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM TIPO_BARRICA 
               WHERE codBarrica=?`;

  const codBarrica = req.body.codBarrica;

  connection.query(sql, [codBarrica], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la Barrica");
    } else {
      res.send("Barrica eliminada");
    }
  });
});

module.exports = router;
