
document.getElementById('AbrirMenuMovil').addEventListener('click', function () {
    var contenedorMenuMovil = document.getElementById('contenedorMenuMovil');
    var AbrirMenuMovil =  document.getElementById('AbrirMenuMovil');

    var CerrarMenuMovil =  document.getElementById('CerrarMenuMovil');
    contenedorMenuMovil.classList.add('right-0');
    contenedorMenuMovil.classList.remove('right-[-100%]');
    AbrirMenuMovil.classList.add("hidden");
    CerrarMenuMovil.classList.remove("hidden");
  });
  
  document.getElementById('CerrarMenuMovil').addEventListener('click', function () {
    var contenedorMenuMovil = document.getElementById('contenedorMenuMovil');
    var AbrirMenuMovil =  document.getElementById('AbrirMenuMovil');
    var CerrarMenuMovil =  document.getElementById('CerrarMenuMovil');
    contenedorMenuMovil.classList.remove('right-0');
    contenedorMenuMovil.classList.add('right-[-100%]');
    AbrirMenuMovil.classList.remove("hidden");
    CerrarMenuMovil.classList.add("hidden");
  });
  
  

  