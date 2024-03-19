const input=require("readline-sync");
let a=input.question("Enter a:"),b=input.question("Enter b:"),c=input.question("Enter c:");
if(a==b==c)
{
    console.log(a*3);
}
else if(a==b||b==c||c==a)
{
    if(a!=c)
    {
        console.log((a*2)%c);
    }
    else if(b!=a)
    {
        console.log((b*2)%a);
    }
    else
    {
        console.log((a*2)%b);
    }
}
else
{
    if(a>b&&a>c)
    {
        console.log(a**2);
    }
    else if(b>c&&b>a)
    {
        console.log(b**2);
    }
    else
    {
        console.log(c**2);
    }
}