// 1: Nhập xuất mảng 1 chiều các số thực 
var ra=Math.floor((Math.random()*10)+1);
var mang= new Array();
var f=1.2;
console.log("mang co " + (ra-1)+" phan tu ");
for(var i=1;i<ra;i++)
{
    mang[i]=i*f;
}
for(var i=mang.length-1;i>=1;i--)
{
    console.log((mang[i]).toFixed(2));
}