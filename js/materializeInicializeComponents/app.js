// Inicializando componentes

document.addEventListener('DOMContentLoaded', function () {
    // Inicializando el sidenav del navbar

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Inicializando el slider de la application

    var elems = document.querySelectorAll('.slider');
	var instances = M.Slider.init(elems, {
        interval: 3000,
        height: 600
    });

    // Inicializando el parallax de la application

    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});