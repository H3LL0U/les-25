$(document).ready(function() {
    $('[id^="cal-"]').click(function() {
        var special_opps = ["cal-=","cal-AC"];
        var id_atr = $(this).attr('id');
        
        if (!special_opps.includes(id_atr)){
        $("#berekening").val($("#berekening").val()+id_atr[id_atr.length-1]);
        }
        else{
            switch (id_atr){
                case "cal-=":
                    var eval_to = eval($("#berekening").val())
                    $("#berekening").val(eval_to);
                    break;
                case "cal-AC":
                    
                    $("#berekening").val('');
                    break;
            }

            
        }
    });
});