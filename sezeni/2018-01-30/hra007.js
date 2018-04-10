(function () {
    $(document).ready(function () {
        var pozice = 0;
        var kybl = $("#kybl");
        var libuse = $("#libuse");
        var brambora = $("#brambora");
        var zavarenina = $ ( "#zavarenina");
        var sirka = window.innerWidth;
        var auticko=50;
        var krok=sirka/10;
        kybl.click(function () {
            pozice = pozice - krok;
            if (pozice <= -auticko) pozice = sirka;
            brambora.offset({ top: 300, left: pozice })

        })
        libuse.click(function () {
            pozice = pozice + krok;
            if (pozice >= sirka) pozice = -auticko;
            brambora.offset({ top: 300, left: pozice })

        })
        var smer=10;

        function posunvpravo (){
            var poz = zavarenina.offset().left;
            poz+=smer;
            if(poz<0 || poz>sirka-50) smer=-smer;
            zavarenina.offset({top:149,left:poz});
            setTimeout(posunvpravo,10);
        }
        posunvpravo();



        //         $("#kybl").click(function(){ 
        //     pozice=pozice+10;$

        //     $("#brambora").offset({top:300,left:pozice})

        // });

    });
})();