var cake=[];
var cakeprice=[4,5,6,7,8,9];
var count=[0,0,0,0,0,0];
cake[0]=document.getElementById('cake0');
cake[1]=document.getElementById('cake1');
cake[2]=document.getElementById('cake2');
cake[3]=document.getElementById('cake3');
cake[4]=document.getElementById('cake4');
cake[5]=document.getElementById('cake5');
var a=document.getElementById('total') ;
var i; var total=0;
function counter(i){
    
count[i]++;
    total=0;
cake[i].innerHTML=count[i];
   console.log("hey"); 
    cost();
   a.innerHTML=total;
}


function remove(i)
{
count[i]=0;   
total=0;        
cake[i].innerHTML=count[i];
    cost();
     a.innerHTML=total;
}
var k;

function cost()
{ for(k=0;k<6;k++)
{
total=total+count[k]*cakeprice[k] ;   
}
}
















