// Array Start

const names = ['Max', 'Min', 'Julie', 'Max'];
console.log("Print value from 2nd position >",names[1]);
console.log("Length of Array >",names.length);
// Display Array
for (const el of names){
    console.log(el);
}
names.push("New element >",'New');
// Find particular value in array
names.find(el => el === 'Max');
// Find index of particular value
const maxIndex = names.findIndex(el => el === 'Max');
console.log(maxIndex);
// Delete element
names.splice(2, 1);

// Array End

// Sets Start
// Duplicated entries are not allowed
// Insertion order is not stored 
// Can't access element with Index, Instead you have to write a method
// Sets are iterable which means you can use for loop but the order can be different
// Size is adjustable
// Delete element and finding element is more faster than array
const ids = new Set([1, 2, 3]);
ids.add("Add a new Element >",4);
for (const el of ids){
    console.log(el);
}
console.log("Checking 1 exist in set >",ids.has(1));
ids.delete("Deleting a element >",3);

// Object 
// Object can contain method or function can attch to them
// Not iterable only use for-in
// Keys are unique and if you declare two same key name the second key name will overwrite the first one
// Keys have to be string, number or symbols not allowed to be object or aray
// Function in object can have functionalities 

const person = {
    firstName: 'Max',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    greet() {
        console.log("Hi I am " + this.firstName);
    }
}
console.log("Display value of Key",person['firstName']);
console.log("Display value of Key", person.firstName);
console.log("Adding new value",person.lastName = 'Schwaz');
// Delete a key value from object
delete person.age;
console.log(person);
// Calling a function from object
person.greet();

// Maps
// Key-value pair are inorder
// Element access via key , Iterable
// Pure data storage so can't add any new values
const resultData = new Map();
resultData.set('Avg',1.53);
resultData.set('lastResult', null);
const country = {
    name: 'India',
    population: 20
}
resultData.set(country, 0.89);

for (const el of resultData){
    console.log(el);
}
console.log(resultData);
console.log(resultData.get('Avg'));
resultData.delete('Avg');
console.log(resultData);
