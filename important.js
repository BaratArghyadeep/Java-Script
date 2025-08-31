// what is callback function in Java script?

setTimeout(() => {
    console.log("timer");
}, 5000);

function x(y)
{
    console.log("x");
    y();
}

x(function y()
{
    console.log("y");
});


//Java script is a synchronous and single threaded language
// Blocking main thread
//power of Callbacks?
//Deep about event listeners 

function attachEventListener()
{
    let count = 0;
    document.getElementById("clickMe").addEventListener("click" , function xyz(){
        console.log("Button clicked", ++count);
        
        });

}

attachEventListener();


//Closure demo with event listeners
// Scope demo with event listeners
//Garbage collection & remove event listenrs 
