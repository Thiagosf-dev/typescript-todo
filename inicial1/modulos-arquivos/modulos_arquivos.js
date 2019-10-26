var ColorModule;
(function (ColorModule) {
    var Color = /** @class */ (function () {
        function Color() {
        }
        Color.prototype.getColor = function () {
            return this.codigo + " = " + this.nome;
        };
        ;
        return Color;
    }());
    ColorModule.Color = Color;
    ;
})(ColorModule || (ColorModule = {}));
;
/// <reference path="Color.ts" />
var ColorModule;
(function (ColorModule) {
    var red = new ColorModule.Color();
    red.nome = "Red";
    red.codigo = "#123456";
    red.getColor();
})(ColorModule || (ColorModule = {}));
var azul = new ColorModule.Color();
azul.codigo = "#a1b1c1";
azul.nome = "Azul";
azul.getColor();
