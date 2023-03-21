var star="";
for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        star+="* ";
    }
    star+="\n";
}
console.log(star);
//-------------------------
var star1="";
for(var i=1;i<=5;i++){
    for(var j=5;j>i;j--){
        star1+="  ";
    }
    for(var k=1;k<=i;k++){
        star1+=" *";
    }
        star1+="\n";
}
console.log(star1);

var star1="";
for(var i=1;i<=5;i++){
    for(var j=5;j>=1;j--){
        if (i>=j){
            star1+=" *";
        }else{
            star1+="  ";
        }
    }
        star1+="\n";
}
console.log(star1);
//---------------------------
var star2="";
for(var i=1;i<=5;i++){
    for(var k=5;k>i;k--){
            star2+="  ";
        }
    for(var j=1;j<=(i+i)-1;j++){
            star2+="* ";
    }
        star2+="\n";
}
console.log(star2);