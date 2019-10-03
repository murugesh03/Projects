
     var displaySize = document.getElementById("sizeShow");
    var square= document.getElementById("square");
    var tem= 100;
    var size=300;
    
  function Smaller(){
           size=size-tem;
      square.style.height= size + "px";
      square.style.width=size + "px";
      
    }

    function Larger(){
            size=size+tem;
            square.style.height= size + "px";
            square.style.width=size + "px";
    }

  

  