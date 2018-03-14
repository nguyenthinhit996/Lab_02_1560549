//7.	Viết chương trình nhập vào mảng một chiều các số nguyên và xuất ra các phần tử chẵn nhỏ hơn 20. 
var r=Math.floor(Math.random()*500);
var mang=new Array(r);
for(var i =0;i<r;i++)
{
    mang[i]=Math.floor(Math.random()*200);
}
mang.forEach(element => {
   
       if(element %2 == 0 && element <=20)
       {
           console.log(element);
       }
   
});