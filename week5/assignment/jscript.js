// Declare any necessary variables.

const resetBtn = document.getElementById('reset');
const certBtn = document.getElementById('print');

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

certBtn.addEventListener('click', function() {
    instantiateStudent();
    printCert();
});
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

resetBtn.addEventListener('click', function() {
    document.getElementById('studentName').value = '';
    document.getElementById('className').value = '';
    document.getElementById('studentScores').value = '';
    document.getElementById('possibleScores').value = '';
});

// Create a function that instantiates a new student object with the input from the HTML form.

function instantiateStudent() {
    student = new student(document.getElementById('studentName').value, document.getElementById('className').value, document.getElementById('studentScores').value, document.getElementById('possibleScores').value);
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

function printCert() {
    document.getElementById('certStudentName').innerHTML = document.getElementById('studentName').value;
    document.getElementById('certClassName').innerHTML = document.getElementById('className').value;
    document.getElementById('certGrade').innerHTML = student.calculateGrade();
}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

function convertArray(str) {
    let array = str.split(',');
    return array;
}