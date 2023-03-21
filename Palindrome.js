//Palindrome
var number=124321;
var count=-1;
var n1=number;
var flag=true;
while (n1>0){
    n1=Math.floor(n1/10);
    count++;
}
do{
    var first=Math.floor(number/(10**count));
    var last=number%10;
    if (first!=last){
        var flag=false;
        break;
    }
    var number=number%(10**count);
    var number=Math.floor(number/10);
   count=count-2;
}while (number>0);
if(flag){
    console.log("Palindrome");
}else{
    console.log("not Palindrome");
}