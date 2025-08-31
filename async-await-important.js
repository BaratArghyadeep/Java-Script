const p1 = new Promise((resolve,reject)=> {

    setTimeout(() => {
        resolve("Promise value!!");
    }, 20000);

})

const p2 = new Promise((resolve,reject)=>{

    setTimeout(()=>{

        resolve("Promise value!!");


    },40000);
})

async function  handlePromise() {
    
    console.log("Hello world");
    const val1 = await p1;
    console.log(val1);
    const val2 = await p2;
    console.log(val2);
}

 handlePromise().then(()=>{

    console.log("test");
 })
