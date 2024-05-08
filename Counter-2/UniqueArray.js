var list=[3,6,2,3,23,23,3,2,3,27,7];

//Unnique array

function uniqueArray(arr) {
    var sum = arr.reduce((acc,cum) => {
        return acc.indexOf(cum) === -1? [...acc,cum] : acc;
    },[]);
    return sum;
}

console.log(uniqueArray(list))

//Repeated array

var repeatValues = list.reduce((acc, cum, index, array) => {
    if (array.indexOf(cum) !== index && acc.indexOf(cum) === -1) {
        acc.push(cum);
    }
    return acc;
}, []);

console.log(repeatValues);



