$(document).ready(function(){
    $("#mostrar").on( "click", function() {
        $('#target').show(); //muestro mediante id
     });
    $("#ocultar").on( "click", function() {
        $('#target').hide(); //oculto mediante id
    });
});