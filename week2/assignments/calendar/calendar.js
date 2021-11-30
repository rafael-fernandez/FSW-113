// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12



// modify this script to use the first day of the month the user selects in place of the const today 

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let whichMonth = document.querySelector("#whichMonth");
let whichYear = document.querySelector("#whichYear");
let searchButton = document.querySelector("#Search");
whichMonth.value = months[0]


whichYear.value = new Date().getFullYear();
window.addEventListener("load", function () {
    if (whichMonth.childElementCount < 12) {
        for (y = 0; y < months.length; y++) {
            var selectMonth = document.createElement("option");
            selectMonth.textContent = months[y];
            selectMonth.setAttribute("value", months[y]);
            whichMonth.append(selectMonth);
            printCalendar();
        }
    }
});




function printCalendar() {
    const today = new Date(`${whichMonth.value} ${whichYear.value}`)
    const months = today.getMonth()


    let days
    switch (months) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8:
        case 10:
            days = 30
            break
        default:
            days = 31
    }

    document.getElementById('calendarDays').innerHTML = ""

    let x
    const weekday = today.getDay()
    for (x = 0; x < weekday; x++) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }

    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while (dt < days)

    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while (y < remainder) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }
}

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

searchButton.addEventListener("click", printCalendar);