console.log("app2")

var isMonthly = false;
handleToggl();

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
    document.getElementById("arcade-price").innerText = (isMonthly ? 9 : 90) + "/" + (isMonthly ? "mo" : "yr");
    document.getElementById("advanced-price").innerText = (isMonthly ? 12 : 120) + "/" + (isMonthly ? "mo" : "yr");
    document.getElementById("pro-price").innerText = (isMonthly ? 15 : 150) + "/" + (isMonthly ? "mo" : "yr");
}