const cart = ["shoe" , "kurta" , "pant"];
var result = createOrder(cart)
    .then(function(orderId)
    {
        console.log(orderId);
        return orderId;

    })
    .then(function(orderId)
    {
       return proceedToPayment(orderId);
    })
    .then(function(data){

        console.log(data);

    })
        
    .catch(function(err)
    {
        console.log(err.message);
    })





function createOrder(cart)
{

const pr = new Promise(function (resolve, reject)
{
    if(!validateCart(cart))
    {

        const err = new Error("Not a valid cart");
        reject(err);
    }

    const orderId = "12345";
    if(orderId)
    {
        setTimeout(() => {
            resolve(orderId);
        }, 5000);
        
    }

});
return pr;

}

function validateCart(cart)
{
    return true;
}

function proceedToPayment(orderId)
{
    return new Promise(function(resolve , reject){

        resolve("Payment is Successful")


    });

}