const input=require("readline-sync");
let a=input.question("Enter A:");
let i=1,s=0,b=a;
for(s=0;a>s;)
{
    if(a%i==0)
    {
        s+=i;
    }
    i++;
}
if(s==a)
{
    console.log("Perfect");
}
else
{
    console.log("Not Perfect");
}