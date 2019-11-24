Working through Functional Programming via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn.

- Learned to use forEach() method. Can be used in place of a for loop in some instances. Example:
```
var arr = [1, 2, 3, 4];
let double = () => {
    let newArr = [];

    arr.forEach((x) => {
        newArr.push(x * 2);
    });

    return newArr;
}

console.log(double(arr)); //Logs [2,4,6,8] to console.

```

- Learned to use concat() method to combine two arrays. Combines contents of a given array with a passed parameter. Example:
```
var arr = [1, 2, 3, 4];
let lyric = ["never too late, Me and my radio trucking on through the night"]
let double = () => {
    let newArr = [];

    arr.forEach((x) => {
        newArr.push(x * 2);
    });

    return newArr;
}

console.log(double(arr).concat(lyric)); //Logs [2,4,6,8, "never too late, Me and my radio trucking on through the night"] to console.
```

- Learned to use every() method on on array. Iterates over an array to check every element passes a given test. Example:
```
function checkPositive(arr) {

    return arr.every((x) => x > 0);

}
checkPositive([1, 2, 3, -4, 5]); //Returns false

```

    - arr.some() works in same way but only checks that there is at least one match in the array, not that all elements match.