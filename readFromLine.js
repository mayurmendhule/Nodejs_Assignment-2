const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine.question('please Enter the name: ',(name)=>{
    console.log(`Hello ${name}`);
    readLine.close();
})