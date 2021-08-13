//Requiero Express
const express = require(`express`);

const cors = require("cors");

const session = require("express-session");
//Inicializo Express
const app = express();

//Sessiones
app.use(
  session({
    secret: "danireact2021",
    resave: false,
    saveUninitialized: true,
  })
);

//Static folder

app.use(express.static("public"));

//MiddleWare para poder hacer uso del body de las llamadas va aca o en las rutas?
app.use(express.json());

//Credentials permite el uso de coockies
//Cors le da permiso de acceso a caulquier otro puerto
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Requiero la ruta de los archivos
const empleadoRoutes = require(`./routes/empleadoRoutes`);
const hectareasRoutes = require(`./routes/hectareasRoutes`);
const instanciaBarricasRoutes = require(`./routes/instanciaBarricasRoutes`);
const instanciaVinosRoutes = require(`./routes/instanciaVinosRoutes`);
const menuRoutes = require(`./routes/menuRoutes`);
const mesaRoutes = require(`./routes/mesaRoutes`);
const ordenClienteRoutes = require(`./routes/ordenClienteRoutes`);
const reservaRoutes = require(`./routes/reservaRoutes`);
const sectorRoutes = require(`./routes/sectorRoutes`);
const tipoBarricaRoutes = require(`./routes/tipoBarricaRoutes`);
const tiradaRoutes = require(`./routes/tiradaRoutes`);
const usuarioRoutes = require(`./routes/usuarioRoutes`);
const variedadRoutes = require(`./Routes/variedadRoutes`);
const vinosRoutes = require(`./routes/vinosRoutes`);
const sesionRoutes = require(`./Routes/sesionRoutes`);

//Rutas
app.use(`/empleado`, empleadoRoutes);
app.use(`/hectareas`, hectareasRoutes);
app.use(`/instanciaBarricas`, instanciaBarricasRoutes);
app.use(`/instanciaVinos`, instanciaVinosRoutes);
app.use(`/menu`, menuRoutes);
app.use(`/mesa`, mesaRoutes);
app.use(`/oredenCliente`, ordenClienteRoutes);
app.use(`/reserva`, reservaRoutes);
app.use(`/sector`, sectorRoutes);
app.use(`/tipoBarrica`, tipoBarricaRoutes);
app.use(`/tirada`, tiradaRoutes);
app.use(`/usuario`, usuarioRoutes);
app.use(`/variedad`, variedadRoutes);
app.use(`/vinos`, vinosRoutes);
app.use(`/sesion`, sesionRoutes);

//Pone a escucar al sv
app.listen(8000, () => {
  console.log("Server iniciado");
});
