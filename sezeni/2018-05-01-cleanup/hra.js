(function () {
    $(document).ready(function () {
        var sirkaOkna = window.innerWidth;
        var vyskaOkna = window.innerHeight;

        var pocetPrekazek = 5;
        var vyskaPrekazky = 100;
        var sirkaPrekazky = 20;

        var prekazky = [];

        function pripravPrekazky() {
            for (var ix = 0; ix < pocetPrekazek; ix++) {
                var sloupecPrekazky = 300 + (sirkaOkna - 400) / pocetPrekazek * ix;
                var rychlostPrekazky = Math.floor(5 + (Math.random() * 10));
                
                var elementPrekazky = $("<div>").addClass("prekazka");
                $("body").append(elementPrekazky)
    
                var novaPrekazka = {
                    sloupec: sloupecPrekazky,
                    rychlost: rychlostPrekazky,
                    element: elementPrekazky,
                    poloha: 0
                }
    
                prekazky.push(novaPrekazka);
            }
        }

        function vymazPrekazky() {
            $(".prekazka").remove();
            prekazky = [];
        }

        function prepocitejPrekazky() {

            prekazky.forEach(function(prekazka) {
                var poloha = prekazka.poloha;
                poloha += prekazka.rychlost;
                if (poloha < 0 || poloha > vyskaOkna - vyskaPrekazky) {
                    prekazka.rychlost = -prekazka.rychlost;
                }
                prekazka.poloha = poloha;

                prekazka.element.offset({ left: prekazka.sloupec, top: poloha });
            })

            setTimeout(prepocitejPrekazky, 1000 / 60);
        }

        var doleva = $("#doleva");
        var doprava = $("#doprava");
        var auticko = $("#auticko");

        var sloupecAuticka = 0;
        var sirkaAuticka = auticko.innerWidth();
        var vyskaAuticka = auticko.innerHeight();
        var krokAuticka = sirkaOkna / 40;
        var polohaAuticka = (vyskaOkna - vyskaAuticka) / 2;

        function krokDoleva() {
            sloupecAuticka = sloupecAuticka - krokAuticka;
            if (sloupecAuticka <= -sirkaAuticka) sloupecAuticka = -sirkaAuticka;
            auticko.offset({ top: polohaAuticka, left: sloupecAuticka })
        }
        function krokDoprava() {
            sloupecAuticka = sloupecAuticka + krokAuticka;
            if (sloupecAuticka >= sirkaOkna) { 
                sloupecAuticka = -sirkaAuticka;
                vymazPrekazky();
                pripravPrekazky();
            }
            auticko.offset({ top: polohaAuticka, left: sloupecAuticka });
        }

        doleva.click(krokDoleva)
        doprava.click(krokDoprava)
        $(document).keyup(function (event) {
            console.log(event.keyCode)
            if (event.keyCode == 37) krokDoleva()
            if (event.keyCode == 39) krokDoprava()
        });

        auticko.offset({ top: polohaAuticka, left: sloupecAuticka });
        pripravPrekazky();
        prepocitejPrekazky();
    });
})();