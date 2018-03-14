//11.	Viết hàm tìm vị trí phần tử có giá trị x xuất hiện cuối cùng trong mảng. 
var ar=Math.floor(Math.random()*500);
console.log("tim phan tu " + ar + " xuat hien cuoi trong mang ");

var r=Math.floor(Math.random()*500);
var mang=new Array(r);
for(var i =0;i<r;i++)
{
    mang[i]=Math.floor(Math.random()*200);
}
var vitri=-1;
for(var i=0;i<mang.length;i++)
{
    if(ar==mang[i])
    {
        vitri=i;
        
    }
}
if(vitri !=-1)
{
    console.log(" vi tri xuat hien " + ar + " tai vi tri " + (vitri+1));
    console.log(mang[vitri]);

}
else
{
    console.log("ko tim thay " + ar+ "!");
    
}