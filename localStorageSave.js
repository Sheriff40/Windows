function save()
{
    localStorage.setItem("desktop",JSON.stringify(desktop));
    localStorage.setItem("collection",JSON.stringify(collectionObj));
}

setInterval(save,2000);
