let length;
let width;

function calculateArea() {

    // Getting values
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    // Inserting in the Dom
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
     // Getting values
     grocery1 = parseFloat(document.getElementById('grocery1').value);
     grocery2 = parseFloat(document.getElementById('grocery2').value);
     grocery3 = parseFloat(document.getElementById('grocery3').value);
 
     let area = grocery1 + grocery2 + grocery3;
 
     // Inserting in the Dom
     document.getElementById('result_grocery').innerText = `The total amount is: ${area}`;
 
}