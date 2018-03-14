//8.	Viết chương trình nhập vào mảng một chiều các số nguyên và xuất ra màn hình các phần tử là số nguyên tố. 
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
var r=Math.floor(Math.random()*500);
var mang=new Array(r);
for(var i =0;i<r;i++)
{
    mang[i]=Math.floor(Math.random()*200);
}
mang.forEach(element => {
   
       if(snt(element))
       {
           console.log(element);
       }
   
});