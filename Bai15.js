//15.	Viết hàm in vị trí các phần tử nguyên tố lớn hơn 23. 
var f=require("./fun");
var mang=f.mang123;
mang.forEach(element => {
    if(f.snt(element) == true && element >23)
    {
        console.log(element);
    }
});
