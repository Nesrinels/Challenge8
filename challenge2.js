
let users = [{name:"Nesrine",age:23,email: "ness@gmail.com"},
    { name: "Jazz", age: 32, email: "jazz@gmail.com"},
    { name: "Fifi", age: 25, email: "fifi@gmail.com" },
    { name: "Nael", age: 36, email: "naels@gmail.com" },];

console.log(users)
function over30(arr){
let result = [];
for (let i = 0; i < arr.length; i++) {
if (arr[i].age > 30) {
    result.push(arr[i]);
}
}
return result;
}
console.log(over30(users));