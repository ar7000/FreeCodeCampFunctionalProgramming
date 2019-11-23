var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    return [].concat(arr).sort((a, b) => { return a - b });
}

nonMutatingSort(globalArray);

//Above represents most functional way of solving but could also be done by creating and returning local array...

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = [...arr];
  return newArr.sort((a,b) => a-b);
}
nonMutatingSort(globalArray);