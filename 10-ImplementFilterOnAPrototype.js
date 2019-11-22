var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    var newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i])
        }
    }

    return newArray;

};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});


//Can also be done using forEach() method...

this.forEach((x) => {
    if (callback(x)) {
        newArray.push(x);
    };
});