const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

router.get(`/`, (req, res) => {
  //LLamada a BD
  const sql = `SELECT * FROM EMPLEADO`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.send("Error al obtener Empleados");
    } else {
      res.json(result);
    }
  });
});

//Con el :id se hace dinamico, agarra todos los que son con algun num de id
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM EMPLEADO WHERE dniEmpleado = ` + req.params.id;
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ mensaje: "Error al buscar datos del empleado" });
    } else {
      if (result.length === 1) {
        const userInfo = result;
        res
          .status(200)
          .json({ mensaje: "Datos de Usuario encontrados", data: userInfo });
      } else {
        res.status(401).json({ mensaje: "Error con los datos Ingresados" });
      }
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO EMPELADO(dniEmpleado, nombre, fechaNacimiento, telefono, mail, salario, fechaContratacion, obraSocial, numeroObraSocial, dniSupervisor)
               VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`;

  const dniEmpleado = req.body.dniEmpleado;
  const nombre = req.body.nombre;
  const fechaNacimiento = req.body.fechaNacimiento;
  const telefono = req.body.telefono;
  const mail = req.body.mail;
  const salario = req.body.salario;
  const fechaContratacion = req.body.fechaContratacion;
  const obraSocial = req.body.obraSocial;
  const numeroObraSocial = req.body.numeroObraSocial;
  const dniSupervisor = req.body.dniSupervisor;

  connection.query(
    sql,
    [
      dniEmpleado,
      nombre,
      fechaNacimiento,
      telefono,
      mail,
      salario,
      fechaContratacion,
      obraSocial,
      numeroObraSocial,
      dniSupervisor,
    ],
    (err, result) => {
      if (err) {
        res.send("No se pudo agregar el Empleado");
      } else {
        res.send("Empleado agregado");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE EMPLEADO 
               SET dniEmpleado=?, nombre=?, fechaNacimiento=?, telefono=?, mail=?, salario=?, fechaContratacion=?, obraSocial=?, numeroObraSocial=?, dniSupervisor=?
               WHERE dniEmpleado=?`;

  const dniEmpleado = req.body.dniEmpleado;
  const nombre = req.body.nombre;
  const fechaNacimiento = req.body.fechaNacimiento;
  const telefono = req.body.telefono;
  const mail = req.body.mail;
  const salario = req.body.salario;
  const fechaContratacion = req.body.fechaContratacion;
  const obraSocial = req.body.obraSocial;
  const numeroObraSocial = req.body.numeroObraSocial;
  const dniSupervisor = req.body.dniSupervisor;

  connection.query(
    sql,
    [
      dniEmpleado,
      nombre,
      fechaNacimiento,
      telefono,
      mail,
      salario,
      fechaContratacion,
      obraSocial,
      numeroObraSocial,
      dniSupervisor,
    ],
    (err, result) => {
      if (err) {
        res.send("Error al actualizar datos del empleado");
      } else {
        res.send(`Datos del empleado ${nombre} actualizado`);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE
               FROM EMPLEADO 
               WHERE dniEmpleado=?`;

  const dniEmpleado = req.body.dniEmpleado;

  connection.query(sql, [dniEmpleado], (err, result) => {
    if (err) {
      console.log(err);
      res.send(`Error al eliminar al empleado con dni: ${dniEmpleado}`);
    } else {
      res.send("Empleado eliminado");
    }
  });
});

module.exports = router;
