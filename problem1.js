const users = [

{firstName : "John" , lastName: "Cena" , age : 26},
{firstName : "Kapil" , lastName: "Dev" , age : 55},
{firstName : "Sachin" , lastName: "Tendulkar" , age : 75},
{firstName : "Saurav" , lastName: "Ganguly" , age : 26}

];

const output = users.reduce(function(acc , curr) {

    if(acc[curr.age])
    {
        acc[curr.age] = ++ acc[curr.age]
    }
    else{
        acc[curr.age] = 1;
    }

    return acc;


}, {})

console.log(output);

