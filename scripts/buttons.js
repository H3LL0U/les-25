$(document).ready(function() {
    $('[id^="cal"]').click(function() {
        var id_atr = $(this).attr('id')
        $("#berekening").val($("#berekening").val()+id_atr[id_atr.length-1])
    });
});