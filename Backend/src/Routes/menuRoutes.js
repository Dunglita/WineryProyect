const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM MENU`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener el Menu");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM MENU WHERE idItemMenu = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener el Menu");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO MENU(idItemMenu, nombreItem, precio, cantidad, descripcion)
               VALUES(?, ?, ?, ?, ?)`;

  const idItemMenu = req.body.idItemMenu;
  const nombreItem = req.body.nombreItem;
  const precio = req.body.precio;
  const cantidad = req.body.cantidad;
  const descripcion = req.body.descripcion;

  connection.query(
    sql,
    [idItemMenu, nombreItem, precio, cantidad, descripcion],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar el item al menu");
      } else {
        res.send("Item del menu agregado");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE menu 
               SET idItemMenu=?, nombreItem=?, precio=?, cantidad=?, descripcion=?
               WHERE idItemMenu=?`;

  const idItemMenu = req.body.idItemMenu;
  const nombreItem = req.body.nombreItem;
  const precio = req.body.precio;
  const cantidad = req.body.cantidad;
  const descripcion = req.body.descripcion;

  connection.query(
    sql,
    [idItemMenu, nombreItem, precio, cantidad, descripcion],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar el item del menu");
      } else {
        res.send("Item del menu actualizado");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM MENU 
               WHERE idItemMenu=?`;

  const idItemMenu = req.body.idItemMenu;

  connection.query(sql, [idItemMenu], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar el item del menu");
    } else {
      res.send("Item del menú eliminado");
    }
  });
});

module.exports = router;
