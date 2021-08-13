//TODO: Lo unico que se hardocdea es el llamado a la funcion con los parematros
//TODO: Agregar un identificador a cada pagina para que el index vea que funcion ejecutar en cada una.
//TODO: la funcion sirve para elementos que no tengan otro valor de display
//FIXME: Agregar condicion que permita agregar y guardar la opcion de display

function abrirSideNav(e) {
  document.getElementById("main").style.marginRight = "25%";
  document.getElementById("sidebar").style.marginRight = "0%";
  document.getElementById("sidebar").style.width = "25%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("buttonSideNav").style.display = "none";
}

function cerrarSideNav(e) {
  document.getElementById("main").style.marginRight = "0%";
  document.getElementById("sidebar").style.width = "0%";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("buttonSideNav").style.display = "block";
  e.preventDefault(); // Evita ir al href si la llamada a la funcion es de un <a>
}
/* TODO:Ver si se puede hacer generica la funcion cbuscar datos dandole los parametros necesarios*/
async function cargarDatos() {
  const url = "http://localhost:8000/VINOS";
  const response = await fetch(url);
  const respuesta = await response.json();
  // nose no anda ver que verga pasa aca o hacerlo con react en un componente  agregarVinos(respuesta);
  //vinos.foreach(agregarVino);
}
const respuesta = cargarDatos();

function agregarVinos(respuesta) {
  //function agregarVino({ codVino, nombre, precio, stock, codBarrica, idTirada }) {
  let numfila = 0;
  const contenedor = document.getElementById("cont");
  console.log(respuesta);
  let tabla = `<table class="table-hover">
      <thead class="thead-dark">
        <tr class="table-warning">
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
          <th scope="col">Barrica</th>
          <th scope="col">Tirada</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-warning">`;
  for (let wine of respuesta) {
    numfila = numfila + 1;
    tabla += `
    <td>${wine.codVino}</td>
    <td>${wine.nombre}</td>
    <td>${wine.precio}</td>
    <td>${wine.stock}</td>
    <td>${wine.codBarrica}</td>
    <td>${wine.idTirada}</td>`;
  }
  tabla += `</tr>
      </tbody>
    </table>`;

  contenedor.innerHTML = tabla;
}
