const p = new Promise(function(resolve, reject){

    resolve("promise value");

});

async function getData()
{

   const val = await p;
   console.log(val);

}

getData();