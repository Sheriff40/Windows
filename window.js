
var windowView = document.querySelector(".window");


var closeButton = document.querySelectorAll(".fa-times");
var maximizeButton = document.querySelectorAll(".fa-window-maximize");
var restoreButton = document.querySelectorAll(".fa-window-restore");
var minimizeButton = document.querySelectorAll(".fa-minus");

var cloneButton = document.querySelector(".fa-folder-plus");

function windowObject() 
{
    this.viewObject = null;
    this.height = "250px";
    this.width = "600px";
    this.top = "200px";
    this.left = "200px";
    this.status = "inline-block";
    this.zIndex = 1;
    this.positionTop = "";
    this.positionLeft = "";
  
    this.render = function()
    {
        var thisWindow = this;
        this.viewObject.style.height = this.height;
        this.viewObject.style.width = this.width;
        this.viewObject.style.top = this.top;
        this.viewObject.style.left = this.left;
        this.viewObject.style.display = this.status;
        this.viewObject.style.zIndex = this.zIndex;
        $(".desktop").appendChild(this.viewObject);
        this.viewObject.querySelector(".fa-window-maximize").addEventListener("click",function(){
            thisWindow.positionTop = thisWindow.top;
            thisWindow.positionLeft = thisWindow.left;
            
            thisWindow.maximize(); 
        });
        this.viewObject.querySelector(".fa-window-restore").addEventListener("click",function(){
            thisWindow.restoreWindow(); 
        });
        this.viewObject.querySelector(".fa-minus").addEventListener("click",function(){
            thisWindow.minimizeWindow(); 
        });
        this.viewObject.querySelector(".fa-times").addEventListener("click",function(){
            thisWindow.close(); 
        });
        this.viewObject.addEventListener("click",function()
        {
            thisWindow.zIndexValue();
        });
    },
    this.maximize = function()
    {
            this.top = "0px";
            this.left = "0px";
            this.height = "100vh";
            this.width = "100vw";
            this.render();
    }
    this.restoreWindow = function()
    {
        this.top = this.positionTop;
        this.left = this.positionLeft;
        this.height = "300px";
        this.width = "600px";
        this.render();
    };
    this.minimizeWindow = function()
    {
        this.top = "90%";
        this.left = "0";
        this.height = "20px";
        this.width = "200px";
        this.render();
    };
    this.close=function()
    {
        this.status = "none";
        this.render();
    },
    this.zIndexValue=function()
    {
        collectionObj.forEach(function(value){
            if(value !== this)
            {
                value.zIndex = 0;
            }this.zIndex = 99;
        });
        this.render(); 
    }
}


cloneButton.addEventListener("click",function(){
    cloneWindow = new windowObject();
    previousWindow = collectionObj.reverse()[0];
    if(!!previousWindow)
    {
        cloneWindow.top = parseInt(previousWindow.top) + 20 + "px";
        cloneWindow.left = parseInt(previousWindow.left) + 20 + "px";
    }
        collectionObj.push(cloneWindow);
        var cloneWindowView = windowView.cloneNode(true);
        cloneWindow.viewObject = cloneWindowView;
        cloneWindow.render();
    
});

winBootLoader();

function winBootLoader()
{
    jsonWinData = JSON.parse(localStorage.getItem("collection"));
    if(!!jsonWinData)
    {
        jsonWinData.forEach(function(value){
            var presistWindow = new windowObject();
            presistWindow.top = value.top;
            presistWindow.left = value.left;
            presistWindow.height = value.height;
            presistWindow.width = value.width;
            var cloneWindowView = windowView.cloneNode(true);
            presistWindow.viewObject = cloneWindowView;
            presistWindow.render();
            collectionObj.push(presistWindow); 
        });
        
    }   
}



// elmnt = windowView;

// dragElement(elmnt);


// function dragElement() {
//         var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//         elmnt.onmousedown = dragMouseDown;
//     }
  
//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       document.onmousemove = elementDrag;
//     }
  
//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//         windowObject.top = (elmnt.offsetTop - pos2) + "px";
//         windowObject.left = (elmnt.offsetLeft - pos1) + "px";
//         windowObject.render();
//     }
  
//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
 

// windowObject.render();