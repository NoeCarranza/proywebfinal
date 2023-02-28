$(document).ready(function () {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      //FOTO

    document.getElementById("fotoperfil").src = data.results[0].picture.large;
      
      //console.log(document.getElementById("fotoperfil").src);
      
      //NOMBRE

      $("#nombre").text(data.results[0].name.first);

      //APELLIDO

      $("#apellido").text(data.results[0].name.last);

      //EDAD

      document.getElementById("edad").textContent = data.results[0].dob.age;

      //TELEFONO

      document.getElementById("telefono").textContent = data.results[0].phone;

      //CELULAR

      document.getElementById("celular").textContent = data.results[0].cell;

      //MAIL

      $("#mail").text(data.results[0].email);

      //PAIS

      $("#pais").text(data.results[0].location.country);

      //ESTADO

      $("#estado").text(data.results[0].location.state);

      //CIUDAD

      document.getElementById("ciudad").textContent =
        data.results[0].location.city;

      //CALLE

      $("#calle").text(data.results[0].location.street.name);

      //NUMERO
      document.getElementById("numero").textContent =
        data.results[0].location.street.number;
    },
  });
});


fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => console.log(data));

