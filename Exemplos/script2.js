function verificar()
{
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano)
    {
        window.alert('[Erro] Verifique os dados novamente!')
    } else
    {       
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var  img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked)
        {
            genero = 'Homem'
            if(idade >=0 && idade < 10)
            {
                //crianca
                img.setAttribute('src', 'Imagens/crianca.m.jpg')
            }else if (idade < 21)
                {
                    //jovem
                    img.setAttribute('src', 'Imagens/homem.adulto.jpg')
                }
            else if (idade < 50)
                {
                    //adulto
                    img.setAttribute('src', 'Imagens/homem.m.jpg')
                }
            else
            {
                //idoso
                img.setAttribute('src', 'Imagens/idoso.jpg')
            }
        }

        else if(fsex[1].checked)
        {
            genero = 'Mulher'
            if(idade >=0 && idade < 10)
            {
                //crianca
                img.setAttribute('src', 'Imagens/crianca.f.jpg')
            }else if (idade < 21)
                {
                    //jovem
                    img.setAttribute('src', 'Imagens/mulher.adulta.jpg')
                }
            else if (idade < 50)
                {
                    //adulto
                    img.setAttribute('src', 'Imagens/mulher.f.jpg')
                }
            else
            {
                //idoso
                img.setAttribute('src', 'Imagens/idosa.jpg')
            }
        }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
            res.appendChild(img)
    }    
}