document.addEventListener('DOMContentLoaded', function() {
    const avisoCookies = document.getElementById('avisocookies');
    const fondo = document.getElementById('fondoavisocookies');
    const botonAceptar = document.getElementById('btnaceptarcookies');
    var dataLayer = window.dataLayer || [];
  
    if (!localStorage.getItem('cookies-aceptadas')) {
      avisoCookies.classList.add('activo');
      fondo.classList.add('activo');
    } else {
      dataLayer.push({ 'event': 'cookies-aceptadas' });
    }
  
    botonAceptar.addEventListener('click', () => {
      avisoCookies.classList.remove('activo');
      fondo.classList.remove('activo');
  
      localStorage.setItem('cookies-aceptadas', true);
      dataLayer.push({ 'event': 'cookies-aceptadas' });
    });
  });