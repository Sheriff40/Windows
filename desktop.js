var viewDesktop = $(".desktop");
var menu = $(".menu");
var desktop = 
{
    
    height:"100vh",
    width:"100%",
    background: "yellow",
    backgroundSize: "cover",
    render: function()
    {
        viewDesktop.style.height = this.height;
        viewDesktop.style.width = this.width;
        viewDesktop.style.backgroundSize = this.backgroundSize;
        viewDesktop.style.background = this.background;
    },
    changeBg: function(value)
    {
        this.background = "url(" + value + ")";
    },
    changeBgSize: function(value)
    {
        this.backgroundSize = value;
    },
    toggelMenu: function()
    {
        event.preventDefault();
        menu.classList.toggle("hidden");
        menu.style.top = event.clientY + "px";
        menu.style.left = event.clientX + "px";
    }
   
}


desktop.changeBg('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
desktop.changeBgSize("contain");
viewDesktop.addEventListener("contextmenu",desktop.toggelMenu);
desktop.render();