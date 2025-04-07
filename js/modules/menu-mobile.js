export default function initMenuMobile(){
    const menuButton = document.querySelector("#menu-mobile");
    const menuList = document.querySelector("#links-menu");

    function openMenu(event) {
        menuList.classList.toggle('activemenu');
        menuButton.classList.toggle('arctivemenu');
    }

    menuButton.addEventListener("click", openMenu);
}

