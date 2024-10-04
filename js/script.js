



let tab_contents = document.getElementsByClassName("tab-content");
let tab_lists = document.getElementsByClassName("tab-list");



function toggle_tab(tab_content_positon) {

    for (let i = 0; i < tab_contents.length; i++) {
        tab_contents[i].style.height = 0;
        tab_lists[i].classList.remove("tab-opened");
    }

    tab_contents[tab_content_positon].style.height = tab_contents[tab_content_positon].scrollHeight + "px";
    tab_lists[tab_content_positon].classList.add("tab-opened");
}

