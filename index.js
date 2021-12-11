// elements
const accordian = document.getElementById("accordionPanelsStayOpenExample");
const bitmap_div = document.getElementById("bitmap-div");
const menu_btn_div = document.getElementById("menu-btn-div");
const screen_width = document.getElementById("body-div").offsetWidth;
const search = document.getElementById("search");
const search_icon = document.getElementById("search-icon");
const filter = document.getElementById("filter");
const filter_icon = document.getElementById("filter-icon");
const table = document.getElementById("ordertable");
const backbtn = document.getElementById("back");


// function to redirect the page to the order details page
function orderDetails(){
    location.replace("Web_Order_Details.html");
}

// function to return to the previous page
function back(){
    location.replace("Web_My_Orders.html");
}

function showOrders(){

    // if the screen width is less than or equal to 768px
    if(screen_width <= 768){
        accordian.style.visibility = "hidden";
        bitmap_div.style.visibility = "hidden";
        menu_btn_div.style.visibility = "hidden";
        filter_icon.style.visibility = "visible";
        search.placeholder = "Search by order id, cust name, mobile num…";
        search.style.left = "230px";
        search.style.top = "73px";
        search_icon.style.left = "590px";
        search_icon.style.top = "85px";
        filter.style.visibility = "show";
        filter.style.top = "72.1px";
        filter.style.left = "650px";
        filter_icon.style.visibility = "show";
        filter_icon.style.top = "85px";
        filter_icon.style.right = "85px";
        table.style.visibility = "visible";
        table.style.left = "0px";
        table.style.top = "128px";
        backbtn.style.visibility = "visible";
    }

    // if the screen width is less than or equal to 375px
    if(screen_width <= 375){
        accordian.style.visibility = "hidden";
        bitmap_div.style.visibility = "hidden";
        menu_btn_div.style.visibility = "hidden";
        filter_icon.style.visibility = "visible";
        search.placeholder = "Search by order id, cust name, mobile num…";
        search.style.left = "0px";
        search.style.top = "110px";
        search_icon.style.left = "590px";
        search_icon.style.top = "85px";
        filter.style.visibility = "show";
        filter.style.top = "72.1px";
        filter.style.left = "650px";
        filter_icon.style.top = "115px";
        filter_icon.style.left = "345px";
        table.style.visibility = "visible";
        table.style.left = "0px";
        table.style.top = "160px";
        backbtn.style.visibility = "visible";

    }
}