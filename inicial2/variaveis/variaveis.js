// booleano
var boo1 = true;
var boo2 = false;
var boo3 = true;
var boo4 = false;
var boo5 = undefined;
var boo6 = null;
// números
var num1 = 1;
var num2 = 1.15;
var num3 = -5;
var num4 = 10;
var num5 = 20.7893;
var num6 = undefined;
var num7 = null;
// string
var str1 = "text";
var str2 = 'text';
var str3 = "text";
var str4 = str1 + str2 + str3 + "text";
var str5 = "text";
var str6 = 'text';
var str7 = "text " + str1;
var str8 = str1 + str2 + str3 + "text";
var str9 = undefined;
var str10 = null;
// array
var arrayString = ['a', "b", "c"];
var arrayNumber = [1, 2, 3];
var array1 = [];
var arrayArrayString = ['a', "b", "c"];
var arrayArrayNumber = [1, 2, 3];
var arrayArrayAny = [1, true, 'A', "text", "A: " + arrayNumber];
var array2 = undefined;
var array3 = null;
// enum
var estado_civil;
(function (estado_civil) {
    estado_civil["SOLTEIRO"] = "Solteiro";
    estado_civil["CASADO"] = "Casado";
    estado_civil["DIVORCIADO"] = "Divorciado";
})(estado_civil || (estado_civil = {}));
;
var ec = estado_civil.CASADO;
// genérico ou sem tipagem
var varAny1 = undefined;
var varAny2 = null;
var varAny3 = "texto";
var varAny4 = 1;
var varAny5 = true;
var varAny6 = [];
var varAny7 = Array("texto", 1, true, []);
