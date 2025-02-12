let idx = 1;
let scripts = [];
selectedPlan = {
    plan: "Arcade",
    price: "9/mo",
    isMonthly: true
}
let addOns = [];
let isValid = true;

function next() {
    if (!isValid) return;
    idx++;
    if (idx > 5) idx = 5;
    if (idx == 2) {
        const form = document.getElementById("myForm");
        if (!form.checkValidity()) {
            idx = 1;
            form.reportValidity();
            showInvalid(form);
            return;
        }
    }
    render(idx);
}

function showInvalid(form) {
    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const phone = form.querySelector("input[name='phone']");

    if (name.value == "") {
        name.classList.add("border-red-500");
        const parent = name.closest("div");
        parent.classList.add("text-red-500");

        const label = parent.querySelector("label");
        label.innerText = "* Name is required";
        label.classList.add("text-red-500");
    } else {
        const parent = name.closest("div");
        parent.classList.remove("text-red-500");
        name.classList.remove("border-red-500");

        const label = parent.querySelector("label");
        label.innerText = "Name";
        label.classList.remove("text-red-500");
    }

    if (email.value == "") {
        const parent = email.closest("div");
        parent.classList.add("text-red-500");
        email.classList.add("border-red-500");

        const label = parent.querySelector("label");
        label.innerText = "* Email is required";
        label.classList.add("text-red-500");
    } else {
        const parent = email.closest("div");
        parent.classList.remove("text-red-500");
        email.classList.remove("border-red-500");

        const label = parent.querySelector("label");
        label.innerText = "Email";
        label.classList.remove("text-red-500");
    }

    if (phone.value == "" || (phone.value + "").length != 10) {
        phone.classList.add("border-red-500");
        const parent = phone.closest("div");
        parent.classList.add("text-red-500");

        const label = parent.querySelector("label");
        label.innerText = "* Phone is required";
        label.classList.add("text-red-500");
    } else {
        const parent = phone.closest("div");
        parent.classList.remove("text-red-500");
        phone.classList.remove("border-red-500");

        const label = parent.querySelector("label");
        label.innerText = "Phone";
        label.classList.remove("text-red-500");
    }
}

//initial render
render(1);

function render(idx) {
    if (idx == 0) return;
    fetch(`./components/page${idx}.html`).then((response) => {
        return response.text();
    }).then((html) => {
        document.getElementById("content").innerHTML = html;
    })
        .catch((error) => {
            console.error("Error fetching page1.html: ", error);
        });


    //remove all other pages script
    removeScript();
    renderStep();
    renderBtn();
    //add script
    let script = document.createElement("script")
    script.defer = true;
    script.src = `./components/js/app${idx}.js`;
    script.id = `script${idx}`;
    document.body.appendChild(script);
    scripts.push(`script${idx}`);
}

function removeScript() {
    scripts.forEach((script) => {
        let element = document.querySelector("#" + script);
        if (element) {
            element.remove();
            console.log("Removed:", script);
        } else {
            console.warn("Element not found:", script);
        }
    });
    scripts = [];
    console.log("Remaining scripts:", scripts);
}

function renderStep() {
    console.log("render step");
    for (let i = 1; i <= 4; i++) {
        const classList = document.getElementById("step-" + i).classList;
        if (i == idx) {
            classList.remove("text-[var(--cool-gray)]");
            classList.add("text-black");
            classList.add("bg-[var(--pastel-blue)]");
        } else {
            classList.remove("text-black");
            classList.add("text-[var(--cool-gray)]");
            classList.remove("bg-[var(--pastel-blue)]");
        }
    }
}

function prev() {
    idx--;
    if (idx < 1) idx = 1;
    render(idx);
}

function renderBtn() {
    if (idx == 1) {
        document.getElementById("prev").classList.remove("text-[var(--cool-gray)]");
        document.getElementById("prev").classList.add("text-transparent");
    } else {
        document.getElementById("prev").classList.remove("text-transparent");
        document.getElementById("prev").classList.add("text-[var(--cool-gray)]");
    }

    if (idx == 5) {
        document.getElementById("buttons").classList.add("hidden");
    } else {
        document.getElementById("buttons").classList.remove("hidden");
    }
}



