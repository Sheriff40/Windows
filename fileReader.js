function readData() {
    var file = document.querySelector('input[type=file]').files[0];
    var fs = new FileReader();
    fs.onload = function () {
        dataURL = fs.result;
        menuObject.changeBgCall(dataURL);
    }
    fs.readAsDataURL(file);
}
