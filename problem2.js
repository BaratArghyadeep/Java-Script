const users = [

    {firstName : "John" , lastName: "Cena" , age : 26},
    {firstName : "Kapil" , lastName: "Dev" , age : 55},
    {firstName : "Sachin" , lastName: "Tendulkar" , age : 75},
    {firstName : "Saurav" , lastName: "Ganguly" , age : 26}
    
    ];

const output = users.filter(function(x){

    if(x.age > 55)
    {
        return x;
    }

}).map((x)=> x.firstName);

console.log(output);

const output1 = users.reduce(function(acc, curr){
    if (curr.age > 55) {
        acc.push(curr.firstName);
    }
    return acc; // Make sure to always return acc!
 },[]);

 console.log(output1);