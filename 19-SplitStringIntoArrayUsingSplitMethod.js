function splitify(str) {

    return str.split(/[^A-Za-z0-9]/);

}
console.log(splitify("Hello world,I-am code"));