const menu = document.getElementById("menu");
const close = document.getElementById("close");
const lists = document.getElementById("lists");
const openmenu = document.getElementById("openmenu");
const closemenu = document.getElementById("closemenu");
const welcometxt = document.getElementById("welcometxt");
const s_name = document.getElementById("s_name");
const contact_us = document.getElementById("contact_us");

openmenu.addEventListener("click",function(){
    lists.style.display="flex";
    menu.style.display="none";
    close.style.display="flex";
    welcometxt.style.display="none";
    s_name.style.display="none";
    contact_us.style.display="none";
})
closemenu.addEventListener("click",function(){
    close.style.display = "none";
    menu.style.display = "flex";
    lists.style.display = "none";
    lists.setAttribute("style"," ");
    welcometxt.style.display="flex";
    s_name.style.display="flex";
    contact_us.style.display="flex";

})