$(function () {
    // vista splash
    setTimeout(function () {
        $('#splash').fadeOut();
        $('#city').removeClass('hide');
    }, 4000);
});

// funcionalidad vista 1
$('a.btn.white').click(function () {
    $('#dropdown1').toggleClass('hide');
});
// estilos contenedor de banderas
$('#dropdown1').attr({
    'style': 'width: 7rem; position: absolute; top: 10rem; left: 4.5rem; display: block; opacity: 1'
});
// Habilitando boton deacuerdo al contenido
$('#input_text').keyup(function () {
    if ($('#input_text').val().length < 10) {
        $('#next').addClass('disabled');
        $('#next').removeClass('btn-next');
    } else if ($('#input_text').val().length == 10) {
        $('#next').removeClass('grey lighten-2 disabled');
        $('#next').addClass('btn-next');
    }
});
// funcionalidad para el código aleatorio
function rand_code(chars, lon) {
    code = '';
    for (x = 0; x < lon; x++) {
        rand = Math.floor(Math.random() * chars.length);
        code += chars.substr(rand, 1);
    }
    return code;

characters = '0123456789';
longitud = 3;
// Mostrando codigo aleatorio
$('#next').click(function () {
    alert('Tu codigo LAB -' + rand_code(characters, longitud));
    $('#next').attr('href', 'page2.html');
});

// funcionalidad pagina 2
$('#code').keyup(function () {
    if ($('#code').val().length < 3) {
        $('#next2').addClass('disabled');
        $('#next2').removeClass('btn-next');
    } else if ($('#code').val().length == 3) {
        $('#next2').removeClass('grey lighten-2 disabled');
        $('#next2').addClass('btn-next');
        $('#next2').attr('href', 'page3.html');
    }
});

// funcionalidad pagina 3
$('#First-name').keyup(function () {
    if ($('#First-name').val().length < 3) {
        $('#next3').addClass('disabled');
        $('#next3').removeClass('btn-next');
    } else if ($('#First-name').val().length == 3) {
        $('#next3').removeClass('grey lighten-2 disabled');
        $('#next3').addClass('btn-next');
    }
});

$('#test5').click(function () {
    if ($('input[type="checkbox"]:checked+label:before')) {
        $('#next3').removeClass('grey lighten-2 disabled');
        $('#next3').addClass('btn-next');
        $('#next3').attr('href', 'page4.html');
    }
});