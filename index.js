output = document.getElementById("output")

function display(char){
    output.value += char
}

function clearDisplay(){
    output.value = ''
}

function erase(){
    output.value = output.value.slice(0, -1)
}

function calculate(){
    output.value = output.value.replaceAll("^", "**")

    try{
        output.value = eval(output.value)
    }catch(e){
        output.value = "Error.";
    }
}