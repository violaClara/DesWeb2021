var num=1;


setInterval(function(){
    document.getElementById('sl'+num).checked=true;

    num++;
    if(num>4){
        num=1;
    }
},6000);
