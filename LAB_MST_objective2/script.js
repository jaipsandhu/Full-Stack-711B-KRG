let total = 0;
let selectedItem = null;

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name === "" || amount === 0) {
        alert("Please enter all fields");
        return;
    }

    let li = document.createElement("li");

    li.textContent = name + " | " + category + " | " + amount + " ";

    // select for update
    li.onclick = function () {
        selectedItem = li;

        document.getElementById("name").value = name;
        document.getElementById("amount").value = amount;
        document.getElementById("category").value = category;
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = function () {

        total -= amount;
        document.getElementById("total").textContent =
            "Total = " + total;

        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("list").appendChild(li);

    total += amount;

    document.getElementById("total").textContent =
        "Total = " + total;

    clearInputs();
}



function updateExpense() {

    if (selectedItem == null) {
        alert("Select item first");
        return;
    }

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    selectedItem.firstChild.textContent =
        name + " | " + category + " | " + amount + " ";

    clearInputs();
    selectedItem = null;
}



function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}