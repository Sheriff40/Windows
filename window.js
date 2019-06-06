
var windowView = document.querySelector(".window");


var closeButton = document.querySelector(".fa-times");
var maximizeButton = document.querySelector(".fa-window-maximize");
var restoreButton = document.querySelector(".fa-window-restore");
var minimizeButton = document.querySelector(".fa-minus");

var windowObject = 
{
    height: "300px",
    width: "600px",
    top: "100px",
    left: "200px",
    status: "inline-block",
    render:function()
    {
        windowView.style.height = this.height;
        windowView.style.width = this.width;
        windowView.style.top = this.top;
        windowView.style.left = this.left;
        windowView.style.display = this.status;
    },
    maximizeWindow:function()
    {     
        this.top = "0px";
        this.left = "0px";
        this.height = "100vh";
        this.width = "100vw";
        this.render;
    },
    restoreWindow:function()
    {
        this.top = "100px";
        this.left = "200px";
        this.height = "300px";
        this.width = "600px";
    },
    minimizeWindow:function()
    {
        this.top = "90%";
        this.left = "0";
        this.height = "20px";
        this.width = "200px";
    },
    close:function()
    {
        this.status = "none";
        
    }
}

maximizeButton.addEventListener("click",function(){
    windowObject.maximizeWindow();
    windowObject.render();
});


restoreButton.addEventListener("click",function(){
    windowObject.restoreWindow();
    windowObject.render();
});

minimizeButton.addEventListener("click",function(){
    windowObject.minimizeWindow();
    windowObject.render();
})

closeButton.addEventListener("click",function(){
    windowObject.close();
    windowObject.render();
})

windowObject.render();