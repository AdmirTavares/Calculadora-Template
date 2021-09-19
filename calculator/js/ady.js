function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printhistory(num){
 document.getElementById("history-value").innerText=num;

}
function getoutput(){

return document.getElementById("output-value");

}
function printoutput(num){
    if(num==""){
     document.getElementById("output-value").innerText=num;}
     else{
       document.getElementById("output-value").innerText= getFormattedNumber(num);}
    } 
       function getFormattedNumber(num){
       if(num=="-"){
           return "";
       }
       var n =Number(num);
       var value = n.toLocaleString("en"); 
       return value; 

       }
       function reverseNumberFormat(num){
           return Number(num.replace(/,/g,''));
       }
       var operator=document.getElementsByClassName("operator");
 for(var i =0; i<operator.length;i++){
     operator[i].addEventListener('click',function(){
               
if(this.id=="clear"){
    printhistory("");
    printoutput("");
}
else if(this.id=="backspace"){
    var output =reverseNumberFormat(getoutput()).toString;
    if(output){
        output=output.substr(0,output.length-1);
        printoutput(output);
        
    }
}
else{ 
    var output= getoutput();
    var history= getHistory();
    if(output=="" && history!=""){
        if(isNaN(history[history.length-1])){
            history=history.substr(0,history-length-1);
        }

    }
    if(output!="" || history!="" ){
        output=output==""?output:reverseNumberFormat(output);
        history=history+output;
        if(this.id=="="){
            var result= eval(history);
            printoutput(result);
            printhistory("");

        }
        else{
            history=history+this.id;
            printhistory(history);
            printoutput("");

        }
    }
}

     }
     
     );
 }
 var umber =document.getElementsByClassName("number");
 for(var i =0; i<umber.length;i++){
    umber[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getoutput());
        if(output!= NaN){
            output=output+this.id;
            printoutput(output);
            
        } 
    });
}
              