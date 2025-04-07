export default function initColorScheme() {
    const body = document.querySelector('body')
    const changeMode = document.querySelector('#changemode');
    const logo = document.querySelector('#logo');
    const separador = document.querySelectorAll('.separador');
    const fotoEu = document.querySelector('#fotoeu');
    const linkedin = document.querySelector('#linkedin');
    const whatsapp = document.querySelector('#whatsapp');
    const github = document.querySelector('#github');
    const bootstrap = document.querySelector('#bootstrap');
    const css = document.querySelector('#css');
    const vscode = document.querySelector('#vscode');
    const figma = document.querySelector('#figma');
    const js = document.querySelector('#js');
    const html = document.querySelector('#html');
    const tail = document.querySelector('#tail');
    const arrow = document.querySelector('#arrow-down');

    const userPreference = window.matchMedia('(prefers-color-scheme: dark)')
    if (userPreference.matches) {
        body.classList.add('darkmode')
    } else {
        body.classList.remove('darkmode')
    }
    
    function settingsColorScheme() {
        if(body.classList.contains('darkmode')) {
            logo.src = "img/v 2.svg";
            changeMode.src = "img/sun.svg";
            fotoEu.src = "img/quem sou eu foto dark.png";
            arrow.src = "img/seta-darkmode.svg"
            bootstrap.src = "img/bootstrap dark.png";
            css.src = "img/css dark.png";
            vscode.src = "img/vscode dark.png";
            figma.src = "img/figma dark.png";
            js.src = "img/javascript dark.png";
            html.src = "img/html dark.png";
            tail.src = "img/tail dark.png";
    
    
            linkedin.src = "img/linkedin branco.png";
            whatsapp.src = "img/whatsapp branco.png";
            github.src = "img/github branco.png";
            
            separador.forEach((e)=> {
                e.src = "img/v separador white.png"
            });
    
    
        } else{
            logo.src = "img/v logo.svg";
            changeMode.src = "img/moon.svg";
            fotoEu.src = "img/quem sou eu foto.png";
            arrow.src = "img/seta.svg"

            bootstrap.src = "img/bootstrap.png";
            css.src = "img/css.png";
            vscode.src = "img/vscode.png";
            figma.src = "img/figma.png";
            js.src = "img/js.png";
            html.src = "img/html.png";
            tail.src = "img/tail.png";
    
            linkedin.src = "img/linkedin.svg";
            whatsapp.src = "img/whatsapp.svg";
            github.src = "img/github.svg";
            
            separador.forEach((e)=> {
                e.src = "img/v separador.svg"
            });
    
    
        }
    }
    
    settingsColorScheme();

    function darkmode() {
        body.classList.toggle('darkmode');
        settingsColorScheme();
    }
    changeMode.addEventListener('click', darkmode);
}
