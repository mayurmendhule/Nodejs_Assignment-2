var argument = process.argv;
function userName(name){
    return `Hello ${name}`;
}

console.log(userName(argument[2]));