export default function initFilterTab() {
    const filterButtons = document.querySelectorAll(".filterbutton");
    const iconeferramenta = document.querySelectorAll(".icone-ferramenta");

    const filter = e => {
        document.querySelector(".activefilter").classList.remove("activefilter");
        e.target.classList.add("activefilter");

        iconeferramenta.forEach(icone => {
            icone.classList.add("hide");
            if(icone.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
                icone.classList.remove("hide");
            }
        });
    };
    filterButtons.forEach(button => button.addEventListener("click", filter));
};


