// Let us start Functions of Javascript 
// Print Even and odd Numbers in an range 
 function iseven (number){
    if(number%2==0) return true;
    else return false;
 }
 for(let i=1;i<=15;i++){
    if(iseven(i))
    console.log(i, "It is an even number");
    else 
    console.log(i,"It is an odd number");
 }

 