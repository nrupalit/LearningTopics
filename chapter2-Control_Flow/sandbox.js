// continue and break

const scores = [50, 25, 0, 30, 75, 40, 100, 23, 45];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    document.write(`Current score is ${scores[i]}<br />`);

    if(scores[i] === 100){
        document.write(`The Score is stopped..`);
        break;
    }
}

// Function declaration 
newFunction = () => {
    console.log("API call from newFuction");
}

newFunction();

//Function expression
const otherFunction = function(){
    console.log("API call for otherFunction");
    
}