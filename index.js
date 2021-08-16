const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.getElementById("#check-button");
const msg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]

checkButton.addEventListener("click", () => {

    hideMessage();

    if (billAmount.value > 0) {

        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturn = cashGiven.value - billAmount.value;

            calculateChange(amountToBeReturn);
        } else {
            showMessage("Do you wana wash plates?");
        }

    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
        amountToBeReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function hideMessage() {
    msg.style.display = "none";
}

function showMessage(message) {
    msg.style.display = "block";
    msg.innerText = message;
	
}