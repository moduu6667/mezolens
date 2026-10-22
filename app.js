const searchForm = document.getElementById("searchForm");
const transactionInput = document.getElementById("transactionHash");
const result = document.getElementById("result");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const hash = transactionInput.value.trim();

    if (!hash) {
        result.textContent = "Please enter a transaction hash.";
        return;
    }

    result.textContent =
        "Input received: " + hash +
        ". Live blockchain lookup is not connected yet. " +
        "No transaction status has been verified.";
});