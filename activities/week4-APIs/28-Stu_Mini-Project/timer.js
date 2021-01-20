// element by class
var time= document.querySelector("gameTime");
// set interval
var interval= 30;

// interval in variable
function setTime(){
var timerInterval = theInterval(function(){
    interval--;
    time.//htmlLink? = interval + "the final countdown";

    // timer stops after win or lose 
    if (interval === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
})
}
