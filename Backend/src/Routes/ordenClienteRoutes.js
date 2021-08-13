const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM ORDEN_CLIENTE`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener las ordenes de clientes");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql =
    `SELECT * FROM ORDEN_CLIENTE WHERE numeroOrden = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la orden");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO ORDEN_CLIENTE(numeroOrden, horaOrden, fechaOrden, dniEmpleado, idItemMenu, idReserva)
               VALUES(?, ?, ?, ?, ?, ?)`;

  const numeroOrden = req.body.numeroOrden;
  const horaOrden = req.body.horaOrden;
  const fechaOrden = req.body.fechaOrden;
  const dniEmpleado = req.body.dniEmpleado;
  const idItemMenu = req.body.idItemMenu;
  const idReserva = req.body.idReserva;

  connection.query(
    sql,
    [numeroOrden, horaOrden, fechaOrden, dniEmpleado, idItemMenu, idReserva],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar la orden");
      } else {
        res.send("Orden agregada");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE ORDEN_CLIENTE 
               SET numeroOrden=?, horaOrden=?, fechaOrden=?, dniEmpleado=?, idItemMenu=?, idReserva=?
               WHERE codVino=?`;

  const numeroOrden = req.body.numeroOrden;
  const horaOrden = req.body.horaOrden;
  const fechaOrden = req.body.fechaOrden;
  const dniEmpleado = req.body.dniEmpleado;
  const idItemMenu = req.body.idItemMenu;
  const idReserva = req.body.idReserva;
  connection.query(
    sql,
    [numeroOrden, horaOrden, fechaOrden, dniEmpleado, idItemMenu, idReserva],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar orden");
      } else {
        res.send("Orden actualizada");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM ORDEN_CLIENTE
               WHERE numeroOrden=?`;

  const numeroOrden = req.body.numeroOrden;

  connection.query(sql, [numeroOrden], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la orden");
    } else {
      res.send("Orden eliminada");
    }
  });
});

module.exports = router;
