let num = document.getElementById('txtn')
let list = document.getElementById('select')
let res = document.getElementById('res')
let valores = []

function analisador()
{
    if(num.value.length == 0)
    {
        window.alert('(Nenhum número adicionado) Por favor digite um número!')
    }
    if(num.value > 100 | num.value < 1)
    {
        window.alert('Número inválido. Por favor digite um número entre 1 e 100!')
    }else
        {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `O valor ${num.value} foi adicionado`
            list.appendChild(item)
            res.innerHTML = ''
               
        }
    num.value = ''
    num.focus()
}

function finalizar()
{
    if(valores.length == 0)
    {
        window.alert('Impossivel finalizar, por favor adicione um número na lista')
    }else
        {
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            for(pos in valores)
            {
                soma += valores[pos]
                if(valores[pos] > maior)
                {
                    maior = valores[pos]
                }
                if(valores[pos] < menor)
                {
                    menor = valores[pos]
                }
            }
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo temos ${total} números adicionados`
            res.innerHTML += `O maior valor adicionado foi ${maior}<br>`
            res.innerHTML += `O menor valor adicionado foi ${menor}<br>`
            res.innerHTML += `A soma de todos os valores adicionados foi ${soma}`
        }
    
}