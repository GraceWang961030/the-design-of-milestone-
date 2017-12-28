var ul =document.getElementById('slider');
var li = ul.getElementsByTagName('li');
var num=0;
var len=li.length;

setInterval(function () {
    li[num].style.display="none";
    num=++num==len?0:num;
    li[num].style.display="inline-block";
},2000);