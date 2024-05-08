var list=[3,6,2,3,23,3,2,3,27,7];

function reduceArray(arr) {
    var sum = arr.reduce((acc,cum) => {
        return acc=acc+cum;
    },0);
    return sum;
}

console.log(reduceArray(list))

