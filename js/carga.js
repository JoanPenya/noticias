var cargando = 1;
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (cargando < 6) {
            $.getJSON("data/" + cargando + ".json", function (jsonObject) {
                addrow(jsonObject);
            });
            cargando++;
        } else {
            $('#botonRetro').text('Hola Mundo');
        }
    }
});


function cargar() {
    if (cargando < 6) {
        $.getJSON("data/" + cargando + ".json", function (jsonObject) {
            addrow(jsonObject);
        });
        cargando++;
    } else {
        $('#botonRetro').text('Hola Mundo');
    }
};

function addrow(json) {
    $.each(json, function (i, item) {
        $(".container").append('<div class="row">' +
                '<div class="col-sm-4">' + '<img src="' + item.imagen + '" \n\
                width="300" height="300" class="img-thumbnail">'
                + '<h3 id="titlets">' + item.titulo + "</h3>"
                + '<p>' + item.descripcion + "</p>" +
                '<p>' + item.dia + "</p>" + "</div>" + "</div>"
                );
    });
};