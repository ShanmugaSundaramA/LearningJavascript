//Adding2binaryNo.
var n1=110001;
var n2=100010;
var quo=0,AddedNum="";
while (n1>0||n2>0){
var a=(n1%10+n2%10+quo)%2
quo=Math.floor((n1%10+n2%10+quo)/2)
  AddedNum=a+AddedNum;
  n1=Math.floor(n1/10);
  n2=Math.floor(n2/10);
}
if (quo){
AddedNum=quo+AddedNum;
}
console.log(AddedNum);