const express = require(`express`);
const router = express.Router();
const connection = require(`../connection`);

//Checkear sesion
router.get("/check", (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    console.log(req.session.user);
    res.json({ message: "ok", data: req.session.user });
  } else {
    res.json({ message: "error" });
  }
});

//Iniciar Sesion
router.post("/", (req, res) => {
  const sql = `SELECT user, password, dniEmpleado
  FROM USUARIO
  WHERE user=?
    AND password=?`;

  connection.query(
    sql,
    [req.body.usuario, req.body.password],
    (error, result) => {
      if (error) {
        res.status(500).json({ mensaje: "Error al verificar al Usuario" });
      } else {
        if (result.length === 1) {
          const userName = result[0].user;
          const userDni = result[0].dniEmpleado;

          req.session.user = { dni: userDni };
          res.status(200).json({
            mensaje: "Usuario validado",
            data: { name: userName, dni: userDni },
          });
        } else {
          res.status(401).json({ mensaje: "Email o contraseña no validos" });
        }
      }
    }
  );
});

//Cerrar sesion
router.delete("/", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(500).json({ mensaje: "Error al cerrar sesion" });
    } else {
      res.status(200).json({ mensaje: "Session Cerrada " });
    }
  });
});

module.exports = router;
