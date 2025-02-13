console.log("app4");

console.log(selectedPlan);
console.log(addOns);


setTimeout(() => {
    updateSubscriptionUI();
    renderAddOns();
}, 500);

function updateSubscriptionUI() {
    const subscriptionName = document.getElementById("subscribtion-name");
    const subscriptionType = document.getElementById("subscribtion-type");
    const subscriptionPrice = document.getElementById("subscribtion-price");

    if (!subscriptionName || !subscriptionType || !subscriptionPrice) return;

    subscriptionName.innerText = selectedPlan.plan;
    subscriptionType.innerText = selectedPlan.isMonthly ? "(Monthly)" : "(Yearly)";
    subscriptionPrice.innerText = selectedPlan.price;
}

function renderAddOns() {

}