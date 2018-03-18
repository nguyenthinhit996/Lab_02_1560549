//16.	Viết hàm tìm vị trí phần tử âm đầu tiên trong mảng. Nếu không có phần tử âm trả về  –1. 
var r=require("./fun.js");
var mang=r.mang123;
for(var i=0;i<mang.length;i++)
{
    if(mang[i]<0)
    {
        console.log("vi tri am dau tien :" +i );
        return ;
    }
}