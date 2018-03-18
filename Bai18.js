//18.	Viết hàm tìm vị trí phần tử dương đầu tiên trong mảng. Nếu không có phần tử âm trả về  –1. 
var f=require("./fun.js");
var mang=f.mang123;
var kt=-1;
for(var i=0;i<mang.length ;i++)
{
    if(mang[i]>0)
    {
        kt=i;
    }
}
console.log(kt);