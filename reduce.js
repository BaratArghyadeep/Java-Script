const arr = [5,1,3,2,6];
const sum = arr.reduce(function(acc , curr){

    acc = acc + curr;
    return acc;

},0);


const max = arr.reduce(function(acc, curr){

    if(curr>acc)
    {
        acc = curr;
    }
    return acc;

}, 0)

console.log(sum);
console.log(max);