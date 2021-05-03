/*document.addEventListener("DOMcontentLoaded", function(event){
    const xhr = new XMLHttpRequest();
    const container = document.getElementById('container');
    xhr.onload = function() {
        if(this.status === 200){
            container.innerHTML = xhr.responseText;
            
        }
        else{
            console.log("wrong");
        }
    };
    xhr.open('get', 'fruits.html');
    xhr.send();
}*/
(function(global) {
    var windows ={};
    var homeHtml = "snippet.html";
    var insertHtml = function(selector,html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    document.addEventListener("DOMcontentLoaded", function(event){
        $ajaxUtils.sendGetRequest(homeHtml,function(responseText){
            document.querySelector("#container").innerHTML = responseText;
        },false);                      
    });


global.$windows = windows;
})(window);