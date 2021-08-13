const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM INSTANCIA_BARRICAS`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Barrica");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql =
    `SELECT * FROM INSTANCIA_BARRICAS WHERE idBarrica = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la Barrica");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO INSTANCIA_BARRICAS(idBarrica, fechaLlenado, fechaVaciado, estadoBarrica, litrosGuardados, codBarrica)
               VALUES(?, ?, ?, ?, ?, ?)`;

  const idBarrica = req.body.idBarrica;
  const fechaLlenado = req.body.fechaLlenado;
  const fechaVaciado = req.body.fechaVaciado;
  const estadoBarrica = req.body.estadoBarrica;
  const litrosGuardados = req.body.litrosGuardados;
  const codBarrica = req.body.codBarrica;

  connection.query(
    sql,
    [
      idBarrica,
      fechaLlenado,
      fechaVaciado,
      estadoBarrica,
      litrosGuardados,
      codBarrica,
    ],
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
  const sql = `UPDATE INSTANCIA_BARRICAS 
               SET idBarrica=?, fechaLlenado=?, fechaVaciado=?, estadoBarrica=?, litrosGuardados=?, codBarrica=?
               WHERE idBarrica=?`;

  const idBarrica = req.body.idBarrica;
  const fechaLlenado = req.body.fechaLlenado;
  const fechaVaciado = req.body.fechaVaciado;
  const estadoBarrica = req.body.estadoBarrica;
  const litrosGuardados = req.body.litrosGuardados;
  const codBarrica = req.body.codBarrica;

  connection.query(
    sql,
    [
      idBarrica,
      fechaLlenado,
      fechaVaciado,
      estadoBarrica,
      litrosGuardados,
      codBarrica,
    ],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar la barrica");
      } else {
        res.send("Barrica actualizada");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM INSTANCIA_BARRICAS 
               WHERE idBarrica=?`;

  const idBarrica = req.body.idBarrica;

  connection.query(sql, [idBarrica], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la Barria");
    } else {
      res.send("Barrica eliminada");
    }
  });
});

module.exports = router;
