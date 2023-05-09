
var Request = new Object();
Request = GetRequest();
var courseid = Request['courseid']; 

if (courseid == undefined){
    var rdoCourses=document.getElementsByClassName('form-check-input');
    for (var i=0; i<rdoCourses.length;i++) {
        rdoCourses[i].disabled=false;
    };
}
else{
    var rdo=document.getElementById(courseid);
    rdo.checked=true;
    rdo.disabled=false;
}