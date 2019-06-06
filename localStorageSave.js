function save()
{
    localStorage.setItem("desktop",JSON.stringify(desktop));
    localStorage.setItem("windowObject",JSON.stringify(windowObject));
}

setInterval(save,2000);
