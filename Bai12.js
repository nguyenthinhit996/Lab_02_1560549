//12.	Viết hàm tìm vị trí của phần tử nhỏ nhất trong mảng các số nguyên. 
var r=Math.floor(Math.random()*50);
var mang=new Array(r);
var mang2= new Array(r);
for(var i =0;i<r;i++)
{
  mang2[i]=mang[i]=Math.floor(Math.random()*200);
}
mang.sort(function(a,b){ return a-b});
console.log("so nho nhat mang la "+ mang[0]);
var p=mang[0];
function so()
{
    return p;
}
//console.log(so());
for(var i=0;i<mang2.length;i++)
{
    if(mang2[i]==so())
    {
        console.log("vi tri la + "+(i+1));
        break;
    }
}
console.log(mang2);
