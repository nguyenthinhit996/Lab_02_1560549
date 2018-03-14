// 6.	Viết chương trình nhập mảng các số nguyên và xuất các phần tử lẻ có trong mảng. 
var r=Math.floor(Math.random()*500);
var mang=new Array(r);
for(var i =0;i<r;i++)
{
    mang[i]=Math.floor(Math.random()*200);
}
mang.forEach(element => {
   
       if(element %2 == 0)
       {
           console.log(element);
       }
   
});