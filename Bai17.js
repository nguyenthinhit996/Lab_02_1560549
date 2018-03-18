// 17.	Viết hàm tìm vị trí phần tử âm lớn nhất trong mảng.
var f=require("./fun.js");
var mang=f.mang123;
var set=new Set();
mang.forEach(element => {
  if(element<0)
  {
      set.add(element);
  }  
});
var k=[...set];
var min=Math.min.apply(Math,k);
var vt=mang.indexOf(min);
console.log(mang);
console.log(vt);
