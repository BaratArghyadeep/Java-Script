function test(callback){

    
    console.log("test");
    callback();
}

function abc()
{
    console.log("abc");
}

test(abc);