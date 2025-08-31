const arr = [5,1,3,2,6];

function double(x)
{
    return x*2;
}

const output = arr.map(double);
console.log(output);

const users = [

{firstName : "Arghyadeep" , lastName: "Barat"},
{firstName : "Sukanya" , lastName : "Sannigrahi"}

];

const outputUsers = users.map((x)=> x.firstName + " " +x.lastName);
console.log(outputUsers);