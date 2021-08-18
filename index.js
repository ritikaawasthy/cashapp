const billAmount= document.querySelector("#bill-amount");
const cashGiven= document.querySelector('#cash-given');
const checkButton= document.querySelector('#check-button');
const errorMsg= document.querySelector("#error-msg");
const noOfNotes= document.querySelectorAll(".count-of-notes");

checkButton.addEventListener("click", function validateBill(){
  errorMsg.style.display="none";
  if(billAmount.value>0){
       cashGiven.style.display="block";
       amtReturned= cashGiven.value-billAmount.value
       if(amtReturned>=0){
         calculateChange(amtReturned);

       }else{
           errorMsg.style.display="block";
           errorMsg.innerText= "You are "+ (billAmount.value - cashGiven.value)+ " Rs short."
    }
   }else{
        errorMsg.style.display="block";
        errorMsg.innerText="The bill should be greater than 0";
  }
});

function calculateChange(diffrenceAmt){
  var notesList= [2000, 500, 100, 50, 20, 5, 1]
  for (var i=0; i<notesList.length; i++){
    var countOfNotes=Math.trunc(diffrenceAmt/notesList[i]);
    diffrenceAmt= diffrenceAmt % notesList[i]
    //console.log(countOfNotes)
    noOfNotes[i].innerText= countOfNotes
    }

  }
