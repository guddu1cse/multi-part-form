console.log("app3");

document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        let parentDiv = this.closest("div");

        console.log("event trigger");

        if (this.checked) {
            parentDiv.classList.add("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");
        } else {
            parentDiv.classList.remove("border-[var(--marine-blue)]", "bg-[var(--light-blue)]");
        }
    });
});