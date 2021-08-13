const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM VINOS`;

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
  const sql = `SELECT * FROM VINOS WHERE codVino = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener el vino especificado");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO VINOS(codVino, nombre, precio, stock, imagen, codBarrica, idTirada)
               VALUES(?, ?, ?, ?, ?, ?, ?)`;

  const codVino = req.body.codVino;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const stock = req.body.stock;
  const imagen = req.body.imagen;
  const codBarrica = req.body.codBarrica;
  const idTirada = req.body.idTirada;

  connection.query(
    sql,
    [codVino, nombre, precio, stock, imagen, codBarrica, idTirada],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar el item");
      } else {
        res.send("Item agregado");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE VINOS 
               SET codVino=?, nombre=?, precio=?, stock=?, imagen=?, codBarrica=?, idTirada=?
               WHERE codVino=?`;

  const codVino = req.body.codVino;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const stock = req.body.stock;
  const imagen = req.body.imagen;
  const codBarrica = req.body.codBarrica;
  const idTirada = req.body.idTirada;

  connection.query(
    sql,
    [codVino, nombre, precio, stock, imagen, codBarrica, idTirada],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar item");
      } else {
        res.send("Item actualizado");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM VINOS 
               WHERE codVino=?`;

  const codVino = req.body.codVino;

  connection.query(sql, [codVino], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar el item");
    } else {
      res.send("Item eliminado");
    }
  });
});

module.exports = router;
