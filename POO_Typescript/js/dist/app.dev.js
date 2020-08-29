"use strict";

function getNumber(number_2) {
  if (number_2 === void 0) {
    number_2 = 2;
  }

  return "The number is " + number_2;
} //import { Skate } from './skate';


var Main =
/** @class */
function () {
  function Main() {
    console.log('Aplication load . . .');
  }

  return Main;
}();

var main = new Main();

var TShirt =
/** @class */
function () {
  function TShirt(color, model, branch, size) {
    this.color = color;
    this.model = model;
    this.branch = branch;
    this.size = size;
  }

  TShirt.prototype.set_model = function (model) {
    this.model = model;
  };

  TShirt.prototype.get_model = function () {
    return this.model;
  };

  TShirt.prototype.set_size = function (new_size) {
    this.size = new_size;
  };

  TShirt.prototype.get_color = function () {
    return this.size;
  };

  return TShirt;
}();

var nike_blue = new TShirt(null, null, null, null);
var nike_red = new TShirt('red', 'bucana', 'nike', 20);
nike_blue.color = 'blue';
nike_blue.branch = 'nike';
nike_blue.set_size(10);
var nombre = "felipe"; //letibales and datatypes

var chain = 'chain';
var number = 10;
var _boolean = true; //any letiable

var any = 'hello'; //Aray definition

var array_type_string = ['value1', 'value2', 'value3'];
var array_type_number = [1, 2, 3];
var array_type_any = [1, "2", true];
var array_type_array_any = [array_type_string, array_type_number, array_type_any];
console.log(array_type_array_any); //Conditional datetype

var String_number = 'red';
String_number = 10;
var letter_number = 10; //coment ramdom