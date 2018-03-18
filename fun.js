 
var r=Math.floor(Math.random()*20);
var mang=new Array(r);
for(var i =0;i<r;i++)
{
    mang[i]=Math.floor((Math.random()*2000)-500);
}
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
module.exports.snt=snt;
module.exports.mang123=mang;