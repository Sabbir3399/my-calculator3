let buttons = document.querySelectorAll("button");
let output = document.querySelector(".output");

let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;
        
        if (buttonText == "=") {
            try {
                string = eval(string); 
                output.value = string;
            } catch (error) {
                output.value = "Error"; 
            }
        } else if (buttonText == "clear") {
            string = "";
            output.value = string;
        } else if (buttonText == "delete") {
            string = string.slice(0, -1); 
            output.value = string;
        }
        else {
            string += buttonText;
            output.value = string;
        }
    });
});
