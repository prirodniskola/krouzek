(function () {
    $(document).ready(function () {
        var pozice = 0;
        var kybl = $("#kybl");
        var libuse = $("#libuse");
        var brambora = $("#brambora");
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


        //         $("#kybl").click(function(){ 
        //     pozice=pozice+10;$

        //     $("#brambora").offset({top:300,left:pozice})

        // });

    });
})();