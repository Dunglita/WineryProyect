const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM HECTAREAS`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Hectareas");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM HECTAREAS WHERE idHectarea = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la hectarea especificada");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO HECTAREAS(idHectarea, estadoHectarea, fechaPlantacion, idVariedad)
               VALUES(?, ?, ?, ?)`;

  const idHectarea = req.body.idHectarea;
  const estadoHectarea = req.body.estadoHectarea;
  const fechaPlantacion = req.body.fechaPlantacion;
  const idVariedad = req.body.idVariedad;

  connection.query(
    sql,
    [idHectarea, estadoHectarea, fechaPlantacion, idVariedad],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar informacion de la hectarea");
      } else {
        res.send("Hectarea agregada");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE HECTAREAS 
               SET idHectarea=?, estadoHectarea=?, fechaPlantacion=?, idVariedad=?
               WHERE idHectarea=?`;

  const idHectarea = req.body.idHectarea;
  const estadoHectarea = req.body.estadoHectarea;
  const fechaPlantacion = req.body.fechaPlantacion;
  const idVariedad = req.body.idVariedad;

  connection.query(
    sql,
    [idHectarea, estadoHectarea, fechaPlantacion, idVariedad],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar información de la hectarea");
      } else {
        res.send("Información de la hectarea actualizada");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM HECTAREAS 
               WHERE idHectarea=?`;

  const idHectarea = req.body.idHectarea;

  connection.query(sql, [idHectarea], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la hectarea");
    } else {
      res.send("Hectarea eliminado");
    }
  });
});

module.exports = router;
