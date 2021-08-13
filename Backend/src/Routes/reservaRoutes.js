const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM RESERVA`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener reservas");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM RESERVA WHERE idReserva = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener la reserva especificada");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO RESERVA(idReserva, dniReserva, fechaReserva, horaReserva, telefonoContacto, cantidadComensales, idMesa)
               VALUES(?, ?, ?, ?, ?, ?, ?)`;

  const idReserva = req.body.idReserva;
  const dniReserva = req.body.dniReserva;
  const fechaReserva = req.body.fechaReserva;
  const horaReserva = req.body.horaReserva;
  const telefonoContacto = req.body.telefonoContacto;
  const cantidadComensales = req.body.cantidadComensales;
  const idMesa = req.body.cantidadComensales;

  connection.query(
    sql,
    [
      idReserva,
      dniReserva,
      fechaReserva,
      horaReserva,
      telefonoContacto,
      cantidadComensales,
      idMesa,
    ],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar la reserva");
      } else {
        res.send("Reserva agregada");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE RESERVA 
               SET idReserva=?, dniReserva=?, fechaReserva=?, horaReserva=?, telefonoContacto=?, cantidadComensales=?, idMesa=?
               WHERE idReserva=?`;
  const idReserva = req.body.idReserva;
  const dniReserva = req.body.dniReserva;
  const fechaReserva = req.body.fechaReserva;
  const horaReserva = req.body.horaReserva;
  const telefonoContacto = req.body.telefonoContacto;
  const cantidadComensales = req.body.cantidadComensales;
  const idMesa = req.body.cantidadComensales;

  connection.query(
    sql,
    [
      idReserva,
      dniReserva,
      fechaReserva,
      horaReserva,
      telefonoContacto,
      cantidadComensales,
      idMesa,
    ],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar la reserva");
      } else {
        res.send("Reserva actualizada");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM RESERVA 
               WHERE idReserva=?`;

  const idReserva = req.body.idReserva;

  connection.query(sql, [idReserva], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error al eliminar la Reserva");
    } else {
      res.send("Reserva eliminada");
    }
  });
});

module.exports = router;
