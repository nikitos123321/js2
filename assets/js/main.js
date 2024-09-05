'use strict';

// 1

let name = 'Джон';
let admin = `${name}`;
console.log(admin)

// 2

let nameCity = prompt('Введите название города');
let age = prompt('Введите год образования');
let peoples = prompt('Население');
let cityAge = 2024 - age;
let isTrue = confirm(`Городу ${nameCity} исполнилось ${cityAge} лет с момента его образования. Население ${peoples} человек`);
alert(isTrue);

// 3

let r = prompt('Введите радиус');
const pi = 3.14;
console.log(2*pi*(r**2))

// 4

let a = +prompt('Введите число');
let b = +prompt('Введите второе число');
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);