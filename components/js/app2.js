console.log("app2")

let isMonthly = false;
handleToggl();

function handleToggl() {
    console.log("toggled", isMonthly);
    if (isMonthly) {
        document.getElementById("toggle").classList.remove("translate-x-[135%]");
        document.getElementById("toggle").classList.add("translate-x-[10%]");

        document.getElementById("monthly").classList.remove("text-[var(--cool-gray)]");
        document.getElementById("monthly").classList.add("text-[var(--marine-blue)]");

        document.getElementById("yearly").classList.remove("text-[var(--marine-blue)]");
        document.getElementById("yearly").classList.add("text-[var(--cool-gray)]");

        Array.from(document.getElementsByClassName("free")).forEach((el) => {
            el.classList.add("hidden");
        });
    } else {
        document.getElementById("toggle").classList.remove("translate-x-[10%]");
        document.getElementById("toggle").classList.add("translate-x-[135%]");

        document.getElementById("monthly").classList.remove("text-[var(--marine-blue)]");
        document.getElementById("monthly").classList.add("text-[var(--cool-gray)]");

        document.getElementById("yearly").classList.remove("text-[var(--cool-gray)]");
        document.getElementById("yearly").classList.add("text-[var(--marine-blue)]");

        Array.from(document.getElementsByClassName("free")).forEach((el) => {
            el.classList.remove("hidden");
        });
    }

    renderPrice();
    isMonthly = !isMonthly;
}

function renderPrice() {
    document.getElementById("arcade-price").innerText = (isMonthly ? 9 : 90) + "/" + (isMonthly ? "mo" : "yr");
    document.getElementById("advanced-price").innerText = (isMonthly ? 12 : 120) + "/" + (isMonthly ? "mo" : "yr");
    document.getElementById("pro-price").innerText = (isMonthly ? 15 : 150) + "/" + (isMonthly ? "mo" : "yr");
}