function counter()
{
    var count = 0;

    this.incrementCounter = function (){
        count++;
        console.log(count);
    }

    this.decrementCount = function() {
        count --;
        console.log(count);
    }
}

var counter1 = new counter();
counter1.incrementCounter();
counter1.decrementCount();


var counter2 = new counter();
counter2.decrementCount();