const showMenuButton = document.getElementById("showMenu");
const menu_bar = document.getElementById("right_bar");

let show_menu_flag = true;



showMenuButton.addEventListener("click", ()=>
{
    if(show_menu_flag)
    {
        menu_bar.style.display = "none";
    }
    else
    {
        menu_bar.style.display = "block";
    }

    show_menu_flag = !show_menu_flag;
})
