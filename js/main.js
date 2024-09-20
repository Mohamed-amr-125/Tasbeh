var counter=0;

function incData() {
    var myHead = document.getElementById("demo");
    var sabh = document.getElementById("sabh");
    
    counter++;
    document.getElementById("num").innerHTML=counter;

    if (counter>33) {
        myHead.innerHTML="استغفر الله";
        sabh.innerHTML="استغفر الله";
  
    }
    if (counter>66) {
        myHead.innerHTML="الله اكبر";
        sabh.innerHTML="الله اكبر";
    
    }
    if (counter>98) {
        counter=0;
        myHead.innerHTML="سبحان الله";
        sabh.innerHTML="سبحان الله";
      
    }

}