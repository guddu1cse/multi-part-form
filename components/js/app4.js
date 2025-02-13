console.log("app4");

console.log(selectedPlan);
console.log(addOns);


setTimeout(() => {
    updateSubscriptionUI(); //updating subscription UI
    renderAddOns(); //rendering addOns iteam list
    renderTotalPrice(); //calculeting total price accross the item which is selected
}, 500);

function updateSubscriptionUI() {
    const subscriptionName = document.getElementById("subscribtion-name");
    const subscriptionType = document.getElementById("subscribtion-type");
    const subscriptionPrice = document.getElementById("subscribtion-price");

    //if (!subscriptionName || !subscriptionType || !subscriptionPrice) return;

    subscriptionName.innerText = selectedPlan.plan + (selectedPlan.isMonthly ? " (Monthly)" : " (Yearly)");
    subscriptionType.innerText = selectedPlan.isMonthly ? "(Monthly)" : "(Yearly)";
    subscriptionPrice.innerText = "$" + selectedPlan.price.replace("/mo", "").replace("/yr", "");
}

function renderAddOns() {
    const subcriptionsElement = document.getElementById("subcriptions");

    if (!subcriptionsElement) return;

    subcriptionsElement.innerHTML = "";

    addOns.forEach((addOn) => {
        let div = document.createElement("div");
        div.className = "item w-full flex justify-between items-center mt-2";
        div.innerHTML = `
            <p class="text-[12px] text-[var(--cool-gray)]">${addOn.name}</p>
            <p class="text-[12px] text-[var(--marine-blue)]">${addOn.price}</p>
        `;

        subcriptionsElement.appendChild(div);
    });

    document.getElementById("subscription-duration").innerText = selectedPlan.isMonthly ? "Total (per month)" : "Total (per year)";
}

function renderTotalPrice() {
    let totalPrice = parseInt(selectedPlan.price.replace("$", "").replace("/mo", "").replace("/yr", ""));
    addOns.forEach((addOn) => {
        totalPrice += parseInt(addOn.price.replace("$", "").replace("/mo", "").replace("/yr", ""));
    });

    document.getElementById("total-price").innerText = "$" + totalPrice;
}
