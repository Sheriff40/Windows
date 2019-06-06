
var menuBar = $(".menu-bar");
var subMenuCover = $(".subMenuCover");
var subMenuContent = $(".subMenuContent");
var dataURL = "";

var menuObject = {

    changeBgCall:function(value)
    {
        desktop.changeBg(value);
        desktop.render();
    },
    changeCover:function()
    {
        desktop.changeBgSize("cover");
        desktop.render();
    },
    changeContent:function()
    {
        desktop.changeBgSize("content");
        desktop.render();
    }
}

menuBar.addEventListener("click",function(){
    $(".fileInput").click();    
});

subMenuCover.addEventListener("click",menuObject.changeCover);
subMenuContent.addEventListener("click",menuObject.changeContent);
