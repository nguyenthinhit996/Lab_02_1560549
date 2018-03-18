//14.	Viết hàm in vị trí các phần tử nguyên tố trong mảng các số nguyên. 
var f=require("./fun");
var mang=f.mang123;
var ptsonguyeto=(a)=>
{
    var aa=a;
    var moi=new Set();
    while(aa>10)
    {
        let tepm=aa%10;
        aa=Math.floor(aa/10);
        moi.add(tepm);
    }
    moi.add(aa);
    return moi;
}
for(var i=0;i<mang.length;i++)
{
    console.log(ptsonguyeto(mang[i]));
}


 
