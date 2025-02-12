let idx = 1;
let scripts = [];

function next() {
    idx++;
    if (idx > 5) idx = 5;
    render(idx);
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


function clickParent() {
    console.log("clicked on parent");
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

