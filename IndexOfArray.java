import java.util.Scanner;

class IndexOfArray{
 public static void main(String[] args) {
        int[] arr={1,2,3,5,4,7,6,8,9};
        Scanner scan=new Scanner(System.in);
        int input=scan.nextInt();
        int num=input;
        int count=-1;
        while (num>0){
            count++;   
            num=(int)num/10; 
        }

       //Finding first no, index position.
       int output=0;
       int firstNo=(int)(input/(Math.pow(10, count)));
       for(int i=0;i<arr.length;i++){
             if(firstNo==arr[i]){
                 output=i;
             }
       }
       input=(int)(input%(Math.pow(10, count)));
       count--;
       int j=0;
       while(input>0){
            int No=(int)(input/(Math.pow(10, count)));
            for(int i=0;i<arr.length;i++){
                if(No==arr[i]){
                        j+=i-output;
                        output=i;
                        System.out.println(j);
                }
            }
            input=(int)(input%(Math.pow(10, count)));
            count--;
       }
       System.out.println("output : "+j);
    }
}