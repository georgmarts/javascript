// 1. Отличие переменных var, let и const

// Область видимости переменной var - функция (видна за пределами if/else), let и const - блок (внутри фигурных скобок)

function getNumber() {
  var num = 1
}
console.log(num) // undefined

var num = 2
if (num > 0) {
    var kg = `${num} kg`
}
console.log(kg) // '2 kg' - тут var доступна глобально, потому что это не функция, а блок

// Переменная var может обновляться и объявляться заново

var num = 1;
num = 2;
console.log(num); // 2

var num = 1;
console.log(num)
var num = 2;
console.log(num); // 1 2 

// let – изменяемая переменная

let z = 0;
z = 1;

//  const - неизменяемая, НО мы можем менять свойства объекта в const.

const y = 0;
y = 1; // // TypeError: Assignment to constant variable.

const car = {
  name: 'tesla',
  color: 'white'
}
car.name = 'nissan'
console.log(car) //  {name: "nissan", color: "white"}

// НО мы можем сделать объект в const неизменяемым.

const car = {
  name: 'tesla',
  color: 'white'
}
Object.freeze(car)
car.name = 'nissan'
console.log(car) // {name: "tesla", color: "white"}

// var – поддерживает hoisting. Объявление переменной поднимается вверх в пределах области видимости во время компиляции кода.

varVrb = 3;
var varVrb;

// const, let – не поддерживают hoisting.

letVrb = 2; // ReferenceError: Cannot access 'letVrb' before initialization
let letVrb;

// 2. Замыкание - Closure

// Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.

function createFn() {
  let x = 0;
  function closureFn() {
    console.log(x++);
  }
  return closureFn;
}

const variable = createFn();

variable(); // 0
variable(); // 1
variable(); // 2

// 3. EVENT LOOP: call stack

// Event Loop является стеком, где хранятся все задачи, которые не вошли в синхронный поток выполнения. После завершения синхронного потока - задачи начинают выполняться из Event Loop'а. Однако у Event Loop'а тоже есть свои правила. Он делит все задачи на подтипы: микрозадачи, макрозадачи, задачи отрисовки

// 4. NULL vs UNDEFINED

// null обычно задаётся переменной явно и означает, что она ничего не содержит. undefined показывает, что значение переменной «не определено». undefined обычно присваивается переменной, когда она была объявлена, но не было определено её начальное значение. Также, undefined может возвращаться и из функции — это происходит, если функции явно не возвращает ничего другого. null же обычно возвращают из функции явно, чтобы показать, что результат функции равен «ничему».

// 5. Коллекция данных Map, Set and Object

// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

let map = new Map();

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1"); // булево значение как ключ
console.log(map); // {"1" => "str1", 1 => "num1", true => "bool1"}

// Set позволяет создать массив без дубликатов. Он убирает повторяющиеся элементы.

const myArray = [1, 1, 2, 2, 3];
const unique = new Set(myArray);
console.log(unique); // [1, 2, 3]
unique.add(4);
console.log(unique); // [1, 2, 3, 4]

// Object

// Ways to create new Object

const objectOne = new Object();
objectOne.name = "George";

function Person(fname, lname) {
  this.firstName = fname; // this refers to an object
  this.lastName = lname;
}
const personOne = new Person("testFirstNameOne", "testLastNameOne");
const personTwo = new Person("testFirstNameTwo", "testLastNameTwo");
console.log(personOne.firstName); // testFirstNameOne
console.log(personTwo.firstName); // testFirstNameTwo

const objectTwo = { fname: "George", lname: "Mars" };
console.log(Object.keys(objectTwo)); // ["fname", "lname"]
console.log(Object.values(objectTwo)); // ["George", "Mars"]
console.log(Object.entries(objectTwo)); // [["fname", "George"], ["lname", "Mars"]]

// 6. Array

let text = "ABCDEFG";
const myArr = Array.from(text);

console.log(myArr); // [A, B, C, D, E, F, G]
