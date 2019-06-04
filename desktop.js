var viewDesktop = $(".desktop");

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
    }
   
}


desktop.changeBg('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
desktop.changeBgSize("contain'");
desktop.render();