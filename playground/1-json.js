const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const person = JSON.parse(dataJSON);

person.name = 'Gustavo';
person.age = 31;

fs.writeFileSync('1-json.json', JSON.stringify(person));