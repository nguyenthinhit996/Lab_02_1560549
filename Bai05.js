//5.	Viết chương trình nhập mảng các số thực và xuất các phần tử âm trong
var r=Math.floor(Math.random()*50);
var mang=new Array(r);
for(var i =0;i<r;i++)
{
    mang[i]=((Math.random()*(200))-100).toFixed(2);
}
mang.forEach(element => {
   
       if(element<0)
       {
           console.log(element);
       }
   
});