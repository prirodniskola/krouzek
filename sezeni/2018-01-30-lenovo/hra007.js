(function () {
    $(document).ready(function () {
        var pozice = 0;
        var kybl = $("#kybl");
        var libuse = $("#libuse");
        var brambora = $("#brambora");
    
        var sirka = window.innerWidth;
        var vyska = window.innerHeight;
        var auticko=50;
        var krok=sirka/40;
        function krokDoleva() {
            pozice = pozice - krok;
            if (pozice <= -auticko) pozice = sirka;
            brambora.offset({ top: 300, left: pozice })
        }
        kybl.click(krokDoleva)
        function krokDoprava () {
            pozice = pozice + krok;
            if (pozice >= sirka) pozice = -auticko;
            brambora.offset({ top: 300, left: pozice });
        }
        libuse.click(krokDoprava)

        $(document).keyup(function(event){
            console.log(event.keyCode)
            if(event.keyCode==37)krokDoleva()
            if(event.keyCode==39)krokDoprava()
        })
        var pocetzav =5
        
        var zavareninaTop=[];
        var smer=[]
        for(var ix =0;ix<pocetzav;ix++)
        {
            zavareninaTop.push(300+(sirka-400)/pocetzav*ix)
            smer.push(Math.floor(5+(Math.random()*10)))

        
        }
               for(var ix=0;ix<zavareninaTop.length; ix++)
        {
            var z1=$("<div>").addClass("zavarenina");
            $("body") .append(z1) 
        }
        var zavarenina=$(".zavarenina")
        







        

        function posunzavarenina (){
           
            zavarenina.each(function(ix,el) {
                var poz = $(el).offset().top;
                poz+=smer[ix];
                if(poz<0 || poz>vyska-100) smer[ix]=-smer[ix];
                $ (el). offset ({left:zavareninaTop[ix],top:poz
                }  )
            })
            setTimeout(posunzavarenina,10);
        }
        posunzavarenina();



        //         $("#kybl").click(function(){ 
        //     pozice=pozice+10;$

        //     $("#brambora").offset({top:300,left:pozice})

        // });

    });
})();