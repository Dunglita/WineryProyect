const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM SECTOR`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener sectores");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM SECTOR WHERE idSector = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener el sector especificado");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO SECTOR(idSector, nombreSector, dniEmpleado)
               VALUES(?, ?, ?)`;

  const idSector = req.body.idSector;
  const nombreSector = req.body.nombreSector;
  const dniEmpleado = req.body.dniEmpleado;

  connection.query(
    sql,
    [idSector, nombreSector, dniEmpleado],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar el sector");
      } else {
        res.send("Sector agregado");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE SECTOR 
               SET idSector=?, nombreSector=?,  dniEmpleado=?
               WHERE idSector=?`;

  const idSector = req.body.idSector;
  const nombreSector = req.body.nombreSector;
  const dniEmpleado = req.body.dniEmpleado;

  connection.query(
    sql,
    [idSector, nombreSector, dniEmpleado],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar el Sector");
      } else {
        res.send("Sector actualizado");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM SECTOR 
               WHERE idSector=?`;

  const idSector = req.body.idSector;

  connection.query(sql, [idSector], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar el sector");
    } else {
      res.send("Sector eliminado");
    }
  });
});

module.exports = router;
