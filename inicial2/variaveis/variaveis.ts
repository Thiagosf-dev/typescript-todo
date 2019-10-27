// booleano
let boo1 = true;
let boo2 = false;
let boo3: boolean = true;
let boo4: boolean = false;
let boo5: boolean = undefined;
let boo6: boolean = null;

// números
let num1 = 1;
let num2 = 1.15;
let num3 = -5;
let num4: number = 10;
let num5: number = 20.7893;
let num6: number = undefined;
let num7: number = null;

// string
let str1 = "text";
let str2 = 'text';
let str3 = `text`;
let str4 = str1 + str2 + str3 + "text";
let str5: string = "text";
let str6: string = 'text';
let str7: string = `text ${str1}`;
let str8: string = str1 + str2 + str3 + "text";
let str9: string = undefined;
let str10: string = null;

// array
let arrayString: string[] = ['a', "b", `c`];
let arrayNumber: number[] = [1, 2, 3];
let array1: [] = [];
let arrayArrayString: Array<string> = ['a', "b", `c`];
let arrayArrayNumber: Array<number> = [1, 2, 3];
let arrayArrayAny: Array<any> = [1, true, 'A', "text", `A: ${arrayNumber}`];
let array2: [] = undefined;
let array3: [] = null;

// enum
enum estado_civil {
    SOLTEIRO = "Solteiro",
    CASADO = "Casado",
    DIVORCIADO = "Divorciado"
};
let ec: estado_civil = estado_civil.CASADO;

// genérico ou sem tipagem
let varAny1: any = undefined;
let varAny2: any = null;
let varAny3: any = "texto";
let varAny4: any = 1;
let varAny5: any = true;
let varAny6: any = [];
let varAny7: any = Array<any>("texto", 1, true, []);
