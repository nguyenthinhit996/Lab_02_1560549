// chương trình khơi tạo giá trị các phần tử cho màng môt chiều gồm n phần tử
var n=Math.floor(Math.random()*50);
console.log("Mang co "+ n + " phan tu");
var mang=new Array(n);
for(var i=0;i<mang.length;i++)
{
    mang[i]=0;
}
for(var i=0;i<mang.length;i++)
{
    console.log("Mang["+i + "]= " + mang[i]);
}
