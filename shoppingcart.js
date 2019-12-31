var cake=[];
var cakeprice=[4,5,6,7,8,9];
var count=[0,0,0,0,0,0];
var chips=[];
chips[0]=document.getElementById('chip0');
chips[1]=document.getElementById('chip1');
chips[2]=document.getElementById('chip2');
chips[3]=document.getElementById('chip3');
chips[4]=document.getElementById('chip4');
chips[5]=document.getElementById('chip5');
cake[0]=document.getElementById('cake0');
cake[1]=document.getElementById('cake1');
cake[2]=document.getElementById('cake2');
cake[3]=document.getElementById('cake3');
cake[4]=document.getElementById('cake4');
cake[5]=document.getElementById('cake5');
var a=document.getElementById('total') ;
var i; var total=0;
var b=document.getElementById('total1');

function counter(i){
    
count[i]++;
    
    total=0;
cake[i].innerHTML=count[i];
   console.log("hey"); 
    cost();
   a.innerHTML=total;
b.innerHTML=total;    
  chipadder(i);  
}


function remove(i)
{ 
count[i]=0; 
    
total=0;        
cake[i].innerHTML=count[i];
    cost();
    
     a.innerHTML=total;
    b.innerHTML=total;
chipremover(i);

}

var k;

function cost()
{ for(k=0;k<6;k++)
{
total=total+count[k]*cakeprice[k] ;   
}
}



function chipadder(i)
{ var div=document.createElement("div");
   var img=document.createElement("img"); 
 var span=document.createElement("span");
 div.setAttribute("class","chip");
 
 
    if(i==0)
   { if(count[0]>0)
{  span.innerHTML=count[0];
    div.appendChild(span);

 img.setAttribute("src","img1.jpg");
div.appendChild(img);
chips[0].appendChild(div);
 
}
}
 if(i==1){
    if(count[1]>0)
{  span.innerHTML=count[1];
    div.appendChild(span);
 img.setAttribute("src","img2.jpg");
div.appendChild(img);
    
    chips[1].appendChild(div);  
}}
 if(i==2){
    if(count[2]>0)
{  span.innerHTML=count[2];
    div.appendChild(span);
 img.setAttribute("src","img3.jpg");
div.appendChild(img);
    
    chips[2].appendChild(div);  
}}
if(i==3){
    if(count[3]>0)
{  span.innerHTML=count[3];
    div.appendChild(span);
 img.setAttribute("src","img4.jpg");
div.appendChild(img);
    
    chips[3].appendChild(div);  
}}if(i==4){
    if(count[4]>0)
{  span.innerHTML=count[4];
    div.appendChild(span);
 img.setAttribute("src","img5.jpg");
div.appendChild(img);
    
    chips[4].appendChild(div);  
}}if(i==5){
    if(count[5]>0)
{  span.innerHTML=count[5];
    div.appendChild(span);
 img.setAttribute("src","img 6.jpg");
div.appendChild(img);
    
    chips[5].appendChild(div);  
}}}

function chipremover(i)
{if(i==0)
    {chips[0].innerHTML=""; }
 if(i==1)
    {chips[1].innerHTML=""; }
 if(i==2)
    {chips[2].innerHTML=""; }
if(i==3)
    {chips[3].innerHTML=""; }
if(i==4)
    {chips[4].innerHTML=""; }
if(i==5)
    {chips[5].innerHTML=""; }}



