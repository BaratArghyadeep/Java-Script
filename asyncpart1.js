
const p = new Promise((resolve,reject)=>resolve("promise resolved value"));

async function getData()
{

    return "Namaste";

}



var dataPromise = getData();
console.log(dataPromise);

dataPromise.then(function(res){

    console.log(res);

});

async function getNewData()
{
    return p;
}

const data = getNewData();
data.then(function(res){

    console.log(res);

});