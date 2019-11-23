const squareList = (arr) => {

    return arr
        .filter(x => Number.isInteger(x) && x > 0)
        .map(x => x * x);

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);  