//10.	Viết chương trình nhập vào mảng một chiều các số nguyên và xuất ra màn hình các phần tử là số chính phương nằm tại những vị trí lẻ trong mảng. 
var scp=(a)=>
{
    for(var i=0;i<a;i++)
    {
        if(Math.pow(i,2)==a)
        {
            return true;
        }
    }
    return false;
}
var r=Math.floor(Math.random()*500);
var mang=new Array(r);
for(var i =0;i<r;i++)
{
    mang[i]=Math.floor(Math.random()*200);
}
mang.forEach(element => {
   
       if(scp(element))
       {
           console.log(element);
       }
   
});
