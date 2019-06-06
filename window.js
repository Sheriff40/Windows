
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

winBootLoader();

function winBootLoader()
{
    jsonWinData = JSON.parse(localStorage.getItem("windowObject"));
    if(!!jsonWinData)
    {
        windowObject.top = jsonWinData.top;
        windowObject.left = jsonWinData.left;
        windowObject.height = jsonWinData.height;
        windowObject.width = jsonWinData.width;
    }   
}



dragElement(windowView);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
 


windowObject.render();