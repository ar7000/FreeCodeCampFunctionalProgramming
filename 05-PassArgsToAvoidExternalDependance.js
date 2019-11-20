var fixedValue = 4;

function incrementer(arg) {
    arg++;
    return arg;
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4