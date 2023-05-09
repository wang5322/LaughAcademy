//show the details of a indicated course or story
var Request = new Object();
Request = GetRequest();
var detailid = Request['detailid'];  

var showdetail=document.getElementById(detailid);
showdetail.style.display="block";
