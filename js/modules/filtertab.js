export default function initFilterTab() {
    const filterButtons = document.querySelectorAll(".filterbutton");
    const toolIcon = document.querySelectorAll(".tool-icon");

    const filter = e => {
        document.querySelector(".activefilter").classList.remove("activefilter");
        e.target.classList.add("activefilter");

        toolIcon.forEach(icon => {
            icon.classList.add("hide");
            if(icon.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
                icon.classList.remove("hide");
            }
        });
    };
    filterButtons.forEach(button => button.addEventListener("click", filter));
};


