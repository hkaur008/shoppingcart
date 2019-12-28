var i=0;
var apple= document.getElementById('apple');
function myfunction()
{

    i++;

  var reject=apple.innerHTML="ur count is: "+i;
    
    myprice(i);
}

function discardfunction()
{
i=0;
apple.innerHTML="u have nothing!";
myprice(i);
    
}
var cost=5;
var price=document.getElementById('price');
function myprice(i)
{
    price.innerHTML="you cart has items worth "+i*cost;
  console.log("hey");   
}
