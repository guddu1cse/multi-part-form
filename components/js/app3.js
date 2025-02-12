console.log("app3");

setTimeout(() => {
    addOns = [];
    //rendering ui based on plan slected type
    renderUi(selectedPlan.isMonthly);
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.addEventListener("click", function () {
            let parentDiv = this.closest("div");

            console.log("event trigger");

            if (this.checked) {
                parentDiv.classList.add("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");
            } else {
                parentDiv.classList.remove("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");
            }

            //storing update addOns
            updateAddOns();
        });
    });
}, 500);


function renderUi(type) {
    document.getElementById("online-service-price").innerText = type ? "$1/mo" : "$10/yr";
    document.getElementById("large-storage-price").innerText = type ? "$2/mo" : "$20/yr";
    document.getElementById("customizable-profile-price").innerText = type ? "$3/mo" : "$30/yr";
}

function updateAddOns() {
    addOns = [];
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        if (checkbox.checked) {
            const parentDiv = checkbox.parentElement;
            addOns.push({
                name: parentDiv.querySelectorAll("p")[0].innerText,
                price: parentDiv.querySelectorAll("p")[2].innerText,
            });
        }
    });

    console.log(addOns);
}