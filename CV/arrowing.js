function toLeft(){
    document.getElementById("aboutS1").style.marginLeft="-100%";
    

    setTimeout(function(){
        document.getElementById("verLine").style.height="80vh";
    },1200);

}
function toRight(){
    document.getElementById("aboutS1").style.marginLeft="0";
    document.getElementById("verLine").style.height="0";
}