const resultTotal = document.getElementById("result-total")
const resultEst = document.getElementById("result-est")
const calculateBtn = document.getElementById('calculateBtn')

function calculate() {
    if (document.getElementById("total").value > 1000 && 
        document.getElementById("interestRate").value >= 1 &&
        document.getElementById("period").value >= 1) {
        let investmentInpt = parseFloat(document.getElementById("total").value)
        let intersRateInpt = parseFloat(document.getElementById("interestRate").value)
        let periodInpt = parseFloat(document.getElementById("period").value)
        let total = investmentInpt + (investmentInpt * intersRateInpt * periodInpt)/100
        let est = total - investmentInpt

        resultTotal.textContent = total.toFixed(2)
        resultEst.textContent = est.toFixed(2)
    }
}

//Event listeners on input 
document.getElementById("investmentRange").addEventListener("input", function(event) {
    document.getElementById("total").value = event.target.value
    calculate() 
})
document.getElementById("interestRange").addEventListener("input", function(event) {
    document.getElementById("interestRate").value = event.target.value
    calculate() 
})
document.getElementById("periodRange").addEventListener("input", function(event) {
    document.getElementById("period").value = event.target.value
    calculate() 
})
document.getElementById("total").addEventListener("input", function(event) { 
    if (event.target.value > 100000) {event.target.value = 100000}
    if (event.target.value < 1000) {event.target.value = 1000}
    if (event.target.value != "") { 
    document.getElementById("investmentRange").value = event.target.value
    }
    else {document.getElementById("investmentRange").value = 0 }
    calculate() 
})
document.getElementById("interestRate").addEventListener("input", function(event) {
    if (event.target.value > 20) {event.target.value = 20}
    if (event.target.value < 1) {event.target.value = 1}
    if (event.target.value != "") {
    document.getElementById("interestRange").value = event.target.value
    }
    else {document.getElementById("interestRange").value = 0}
    calculate() 
})
document.getElementById("period").addEventListener("input", function(event) {
    if (event.target.value > 25) {event.target.value = 25}
    if (event.target.value < 1) {event.target.value = 1}
    if (event.target.value != "") {
    document.getElementById("periodRange").value = event.target.value
    }
    else {document.getElementById("periodRange").value = 0}
    calculate() 
})

