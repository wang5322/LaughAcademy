//get paremeters from url
function GetRequest(){
    var url = window.location.search; 
    //get string after "?" from url
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substring(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }return theRequest;
}