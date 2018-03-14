//phát sinh ngẫu nhiên mảng 1 chiều các số nguyên âm
var n= Math.floor(Math.random()*20);
var mang= new Array(n);
console.log("mang co " + (n-1)+ " phan tu ")
for(var i=0;i<mang.length;i++)
{
    var ra=Math.floor(Math.random()*(-100))-1;
    mang[i]=ra;
}
for(var i=0;i<mang.length;i++)
{
    console.log("mang["+i+"] = "+ mang[i]);
}

