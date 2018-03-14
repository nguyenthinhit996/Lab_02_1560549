//9.	Viết chương trình nhập vào số nguyên n và liệt kê các số nguyên tố nhỏ hơn n, nếu mảng không tồn tại số nguyên tố nào nhỏ hơn n thì phải xuất ra một câu thông báo. 
var snt=(a)=>
{
    if(a==1||a==2)
    {
        return true;
    }
    else
    {
        let tepm=a;
        for(var i=2;i<tepm;i++)
        {
            if(tepm%i==0)
            {
                return false;
            }
        }
        return true;
    }
}

var flag=0;
var r=Math.floor(Math.random()*50);
console.log("so nguyen N:" + r);
for(var i=1;i<r;i++)
{
    if(snt(i))
    {
        flag=1;
        console.log(i);
    }
}
if(flag==0)
{
    console.log("ko co so nguyen to nho hon " + r);
}
