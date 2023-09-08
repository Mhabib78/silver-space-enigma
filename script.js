let currentFact = 0;
const totalFacts = document.querySelectorAll('.fact').length; // Dynamically get the number of facts

document.getElementById(`fact${currentFact}`).style.display = 'block';

function showFact(index) {
    document.getElementById(`fact${currentFact}`).style.display = 'none';
    currentFact = index;
    document.getElementById(`fact${currentFact}`).style.display = 'block';
}

function nextFact() {
    let nextIndex = (currentFact + 1) % totalFacts;
    showFact(nextIndex);
}

function prevFact() {
    let prevIndex = (currentFact - 1 + totalFacts) % totalFacts; 
    showFact(prevIndex);
}
let modal = document.getElementById("longDisclaimer");
let btn = document.getElementById("disclaimerModalLink");
let span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
