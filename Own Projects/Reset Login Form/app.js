
function resetButton(){

  var resetform=document.getElementById("reset-form");
   for(i=0; i<resetform.length; i++) {

if (resetform[i].value ==='' && resetform[i+1].value ===''){  
    alert("nothing to clear"); 
    return true;
}else {
    resetform.reset();
    return true;
}
   }
}
