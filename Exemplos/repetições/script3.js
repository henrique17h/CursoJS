function verificar()
{
     var ini = document.getElementById('txtini')
     var fim = document.getElementById('txtfim')
     var passo = document.getElementById('txtpasso')
     var res = document.getElementById('res')
     if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenghth == 0)
     {
         
         window.alert('Impossivel contar. Preencha todos os dados novamente')
     } 
     else 
    {
            res.innerHTML = 'Contando: <br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
        
        if(p <= 0)
        {
            window.alert('Passo inválido! Considerando passo como +1.')
            p = 1
        }
        if(i < f)
        {
            // contagem crescente
            for(let c = i; c <= f; c += p)
            {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        else
        //contagem decrescente
        {
            for(let c = i; c >= f; c-= p)
            {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
    }
        res.innerHTML += `\u{2714}`
}