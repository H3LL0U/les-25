function validateInput(event) {
    var pattern = /[0-9*+\-/]+/;
    var input = event.target.value;


    if (!(pattern.test(input.substr(input.length-1))) && input.substr(input.length-1) != " " && input!="") {
        
        event.preventDefault();
        
        alert("Please enter numbers and the symbols *, -, +, / only.");
        
        event.target.value = event.target.value.slice(0,-1);
    }

    
}