var student = {
    name: "",
    type: "student"
}

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup",keyup);
}

function keyup(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    student.name = document.getElementById('name').value;   

    var totalNameVal = 0;
    for(var i=0; i < student.name.length; i++){
        totalNameVal += student.name.charCodeAt(i);
    }

    var output = "Total Numeric value is " + totalNameVal;
    document.getElementById('output').innerText = output;

}