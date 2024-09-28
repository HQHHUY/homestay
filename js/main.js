const NavTriggerBtn = document.querySelector('#nav_trigger_btn');
const NavMenu = document.querySelector('#nav_menu');

//event listener
NavTriggerBtn.addEventListener('click' , () =>{
    NavMenu.classList.toggle('nav-is-open');

}
);