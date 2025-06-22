function myFunction() {
    var num = parseFloat(document.getElementById("n1").value);

    if (num > 0)
      {
        document.getElementById('result').innerHTML = "Number is Positive";
      }
    else if (num < 0) 
      {
        document.getElementById('result').innerHTML = "Number is Negative";
      }
    else
     {
        document.getElementById('result').innerHTML = "Number is Neutral";
     }
}