let num = [5, 4, 7, 9, 2, 1, 6]
console.log(num)
valores.sort()
/*
for(let pos= 0; pos < num.length; pos++)
{
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num)
{
    console.log(`A posição ${pos} tem os valores ${num[pos]}`)
}