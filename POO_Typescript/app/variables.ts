let nombre :string = "felipe";

//letibales and datatypes

let chain: string = 'chain';
let number: number = 10;
let boolean: boolean = true;

//any letiable

let any: any = 'hello';

//Aray definition

let array_type_string: Array<string> = ['value1', 'value2', 'value3'];
let array_type_number: Array<number> = [1, 2, 3];
let array_type_any: Array<any> = [1, "2", true];
let array_type_array_any: Array<any> = [array_type_string, array_type_number, array_type_any];

console.log(array_type_array_any);

//Conditional datetype

let String_number: number | string = 'red';
String_number = 10;

//Creating new dataType

type letter_numbers = string | number;

let letter_number: letter_numbers = 10;

//coment ramdom