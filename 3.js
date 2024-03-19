const input=require("readline-sync");
let a=input.question("Enter a:"),b=input.question("Enter b:");
let A=[],B=[],c=[],k=0;
for(let i=0;a>i;i++)
{
    A[i]==input.question("Enter A:");
}
for(let i=0;b>i;i++)
{
    B[i]==input.question("Enter B:");
}
for(let i=0;a>i;i++)
{
    for(let j=0;b>j;j++)
    {
        if(A[i]==B[j])
        {
            c[k]=A[i];
            k++;
            j=b;
        }
    }

}
console.log(c);
