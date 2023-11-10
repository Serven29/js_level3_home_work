// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

findBiggestWord(str){
    return str.split().reduce((acc, curr) => acc.length > curr.length ? acc : curr)
}



// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(number)
{
	number = number + "";
	return number.split("").reverse().join("");
}
console.log(Number(reverseNumber(number)));

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

function unique(str) 

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 
function calcPoints(win, draw, loss) {
    return win+draw
}
let win = win * 3;
let draw = 1;
let loss = 0;


// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

function statisctics(arr);
console.log(arr)
return {
    Math.max(arr)
    Math.min(arr)
    length: arr.length
    average:arr.reduce(arr,curr)=>(arr+curr)/arr.length
}


// 6.Написать функцию которая принимает массив работников компании 
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 
const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
 ];


