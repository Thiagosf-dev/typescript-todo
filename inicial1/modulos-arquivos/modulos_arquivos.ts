/// <reference path="Color.ts" />

module ColorModule {
    var red = new Color();
    red.nome = "Red";
    red.codigo = "#123456";
    red.getColor();
}

var azul = new ColorModule.Color();
azul.codigo = "#a1b1c1";
azul.nome = "Azul";
azul.getColor();