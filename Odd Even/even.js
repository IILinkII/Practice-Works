     function printEvenNums(){
        //get the start and end range from user
        var start = parseInt(document.getElementById("start").value);
        var end = parseInt(document.getElementById("end").value);
        var evenNums = "<br>Even Numbers:<br>";
 
        for(i=start; i<=end; i++){
          // let's divide the value by 2
          // if the reminder is zero then it's an Even number
          if(i % 2 == 0){
            evenNums += i + "<br>";
          }
        }
        //print the values
        document.getElementById("result").innerHTML = evenNums;
      }