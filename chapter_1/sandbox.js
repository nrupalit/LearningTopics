// String methods

let fullName = "Modern" + " " + "Javascript";
console.log("Concatination =>" , fullName);
console.log("Method Upper case =>" , fullName.toUpperCase());
console.log("Method Lower case =>" , fullName.toLowerCase());
console.log("Method Index of variable 'a' =>" , fullName.indexOf('a'));
console.log("Method Index of last variable 'a' =>" , fullName.lastIndexOf('a'));

// Slice
console.log("Slicing the Sentance =>" , fullName.slice(0, 6));
console.log(`Other method of writing console => ${fullName}`);

console.log("SubStr =>", fullName.substr(7 , 10) );

// Replace words

console.log("Replacing letter java to type =>" , fullName.replace('Java', 'Type'));

document.write(`<h1>${fullName}</h1>`);


// Array 
const javascript = ['React', 'Angular' , 'Vue' , 'Node'];

document.write(javascript.join(`<li></li>`));
document.write(`
    <br />
    <br />
    <p>
        <li>Applying Concat</li>
    </p>`);
document.write(newJavascript = javascript.concat(['Pie', 'Anime']));
javascript.push(['Donut']);
document.write(`<br /><br /><p><li>Applying push</li></p>`);
document.write(javascript);
javascript.unshift(['ES6']);
document.write(`<br /><br /><p><li>Applying Unshift</li></p>`);
document.write(javascript);
javascript.pop();
document.write(`<br /><br /><p><li>Applying Pop</li></p>`);
document.write(javascript);
javascript.splice(3, 1);
document.write(`<br /><br /><p><li>Applying Splice </li></p>`);
document.write(javascript);
javascript.shift();
document.write(`<br /><br /><p><li>Applying shift</li></p>`);
document.write(javascript);

//includes return true or false
console.log("Using include to know Javascript array include 'React' or not? =>", javascript.includes('React'));


