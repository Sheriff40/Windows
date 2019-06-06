var viewDesktop = $(".desktop");
var menu = $(".menu");
var desktop =
{
    height: "100vh",
    width: "100%",
    background: "yellow",
    backgroundSize: "cover",
    render: function () {
        viewDesktop.style.height = this.height;
        viewDesktop.style.width = this.width;
        viewDesktop.style.background = this.background;
        viewDesktop.style.backgroundSize = this.backgroundSize;
    },
    changeBg: function (value) {
        this.background = "url("+value+")";
    },
    changeBgSize:function (value) {
        this.backgroundSize = value;
    },
    toggelMenu: function () {
        event.preventDefault();
        menu.classList.toggle("hidden");
        menu.style.top = event.clientY + "px";
        menu.style.left = event.clientX + "px";
    }

}

viewDesktop.addEventListener("contextmenu", desktop.toggelMenu);
viewDesktop.addEventListener("click", function(){
    menu.classList.add("hidden");
});

bootLoader();

function bootLoader()
{
    jsonData = JSON.parse(localStorage.getItem("desktop"));
    if(!!jsonData)
    {
        desktop.height = jsonData.height;
        desktop.width = jsonData.width;
        desktop.background = jsonData.background;
        desktop.backgroundSize = jsonData.backgroundSize; 
    }   
}

desktop.render();
