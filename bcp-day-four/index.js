function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var toppings = elements.toppings;

    var grade = elements.grade;
    console.log("grade, grade.value");

    var selectedToppings = "Olives";

    for(var i = 0; i < toppings.length; i++) {
        var topping = toppings [i];
        if(topping.checked) {
            selectedToppings = selectedToppings
                + "" + topping.value;
        }
    }

    console.log(selectedToppings);

 }
    