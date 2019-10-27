function f<T>(param: T): T {
    return param;
};

f(1);   // param: number
let num: number = f(10);
let str: string = f("string");
let num2: number = f<number>(10);