function stringInverter(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

const string = 'Teste de inverter string em JavaScript';
console.log(stringInverter(string));
