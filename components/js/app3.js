console.log("app3");

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
        });
    });
}, 500);