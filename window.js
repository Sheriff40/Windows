
var windowView = document.querySelector(".window");

var windowObject = 
{
    height: "300px",
    width: "600px",
    top: "200px",
    left: "200px",
    render:function()
    {
        windowView.style.height = this.height;
        windowView.style.width = this.width;
        windowView.style.top = this.top;
        windowView.style.left = this.left;
    }
}

windowObject.render();