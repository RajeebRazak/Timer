 let startNum =10;
 let countdownCallback =() => {
         //Display the number on the screen.
         document.getElementById("countdown").innerHTML = startNum;

         // if the number is 0, Display "HAPPY INDEPENDENCE DAY !" and stop the countdown.
         if (startNum === 0) {
            document.getElementById("countdown").innerHTML ="HAPPY INDEPENDENCE DAY !";
            return;
         }
         document.getElementById("countdown").innerHTML = startNum;
          startNum--;
          setTimeout(countdownCallback,1000);
}