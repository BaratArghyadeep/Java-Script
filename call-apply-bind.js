let name = {
    firstName : "Arghyadeep",
    lastName : "Barat",
    
}

let name2 = {
    firstName : "Sachin",
    lastName : "Tendulkar"
}

 function printFullName(hometown , state){

    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " +state);
}


printFullName.call(name,"Bankura","West Bengal");
printFullName.call(name2,"Mumbai", "Maharashtra");
printFullName.apply(name2,["Mumbai", "Maharashtra"]);

let printUser = printFullName.bind(name2,"Mumbai", "Maharashtra");
console.log(printUser);
printUser();