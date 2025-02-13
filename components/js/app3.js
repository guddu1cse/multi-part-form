console.log("app3");
addOns = [];

setTimeout(() => {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.addEventListener("click", function () {
            let parentDiv = this.closest("div");

            console.log("event trigger");

            if (this.checked) {
                parentDiv.classList.add("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");
            } else {
                parentDiv.classList.remove("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");
            }

            updateAddOns();
        });
    });
}, 500);

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