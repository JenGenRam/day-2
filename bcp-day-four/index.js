function handleSubmit(event){
    var form = event.target;
    var elements = form.elements

    var guess = elements.guess.value;

    var result = document.getElementById("result");

    
    var correct = 7;

    if(guess < 7) {
        result.textContent = "Too low"
    } else if(guess > 7) {
        result.textContent = "Too high"
    } else {
        result.textContent = "You right foo!"
    }
}