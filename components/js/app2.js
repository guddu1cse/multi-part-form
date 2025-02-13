console.log("app2")
selectedPlan = {
    plan: null,
    price: null,
    isMonthly: true
}

var isMonthly = false;
handleToggl();

setTimeout(() => {

    document.querySelectorAll('.plan input[type="radio"]').forEach((radio) => {
        radio.addEventListener('change', function () {
            console.log("Event triggered");


            document.querySelectorAll('.plan').forEach((plan) => {
                plan.classList.remove("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");
                plan.classList.add("border-[var(--cool-gray)]", "bg-transparent");
            });


            const parent = this.parentElement;
            parent.classList.remove("border-[var(--cool-gray)]", "bg-transparent");
            parent.classList.add("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");

            selectedPlan.plan = parent.querySelectorAll("p")[0].innerText;
            selectedPlan.price = parent.querySelectorAll("p")[1].innerText;
            selectedPlan.isMonthly = !isMonthly;
            console.log(selectedPlan);
        });
    });

}, 500);


function handleToggl() {
    console.log("toggled", isMonthly);

    let toggle = document.getElementById("toggle");
    let monthly = document.getElementById("monthly");
    let yearly = document.getElementById("yearly");

    if (toggle) {
        if (isMonthly) {
            toggle.classList.remove("translate-x-[135%]");
            toggle.classList.add("translate-x-[10%]");
        } else {
            toggle.classList.remove("translate-x-[10%]");
            toggle.classList.add("translate-x-[135%]");
        }
    }

    if (monthly) {
        if (isMonthly) {
            monthly.classList.remove("text-[var(--cool-gray)]");
            monthly.classList.add("text-[var(--marine-blue)]");
        } else {
            monthly.classList.remove("text-[var(--marine-blue)]");
            monthly.classList.add("text-[var(--cool-gray)]");
        }
    }

    if (yearly) {
        if (isMonthly) {
            yearly.classList.remove("text-[var(--marine-blue)]");
            yearly.classList.add("text-[var(--cool-gray)]");
        } else {
            yearly.classList.remove("text-[var(--cool-gray)]");
            yearly.classList.add("text-[var(--marine-blue)]");
        }
    }

    Array.from(document.getElementsByClassName("free")).forEach((el) => {
        if (isMonthly) {
            el.classList.add("hidden");
        } else {
            el.classList.remove("hidden");
        }
    });

    renderPrice();
    isMonthly = !isMonthly;
}


function renderPrice() {
    const arcadePrice = document.getElementById("arcade-price");
    const advancedPrice = document.getElementById("advanced-price");
    const proPrice = document.getElementById("pro-price");

    if (arcadePrice) {
        arcadePrice.innerText = (isMonthly ? 9 : 90) + "/" + (isMonthly ? "mo" : "yr");
    }
    if (advancedPrice) {
        advancedPrice.innerText = (isMonthly ? 12 : 120) + "/" + (isMonthly ? "mo" : "yr");
    }
    if (proPrice) {
        proPrice.innerText = (isMonthly ? 15 : 150) + "/" + (isMonthly ? "mo" : "yr");
    }
}