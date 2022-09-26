function Clicked(letra, j) { // essa função é chamada quando uma letra é clicada
    console.log(letra) // mostra no console a letra clicada
    if (hideword.includes("_")) { // se a palavra ainda não foi descoberta e a forca ainda não está completa
        if (forca < 6) {
            const showword = [...hideword]; // cria um novo array com o conteúdo do array hideword. os "..." são usados para criar um novo array atualizando o conteúdo do array anterior
            const newusedletters = usedletters.includes(letra) ? usedletters : [...usedletters, letra]; // se a letra clicada já foi usada, o array newusedletters recebe o array usedletters. Se a letra clicada não foi usada, o array newusedletters recebe o array usedletters com a letra clicada adicionada
            setusedletters(newusedletters); // atualiza o array usedletters, setando o valor de newusedletters dentro de usedletters
            console.log(newusedletters); // mostra no console o array newusedletters

            if (chooseword.includes(letra)) {// se a letra clicada está na palavra sorteada
                for (let i = 0; i < chooseword.length; i++) { // percorre o array chooseword
                    if (chooseword[i] === letra) { // se a letra clicada é igual a letra do array chooseword, pega o indice e substitui o "_" correspondente no array showword
                        showword[i] = letra; // substitui o "_" pela letra correspondente no array showword
                    }
                }
                setHideword(showword);// atualiza o array hideword, setando o valor de showword dentro de hideword
            }
            else if (!chooseword.includes(letra)) { setForca(forca + 1); console.log("FORCA", forca) }
        }
    }
    else { console.log("Não há palavra para acrescentar letra") } // se a palavra já foi descoberta ou a forca está completa, mostra no console "Não há palavra para acrescentar letra"
}

function clicarLetra(letra, i) {
    console.log(letra)
    if (noPalavra.includes('_')) {
        if (forca < 6) {
            const mostraPalavra = [...noPalavra]
            const novasLetras = arrayLetra.includes(letra) ? arrayLetra : [...arrayLetra, letra]
            setArrayLetra(novasLetras)
            console.log(novasLetras)

            if (arrayPalavra.includes(letra)) {
                for (let i = 0; i < arrayPalavra.length; i++) {
                    if (arrayPalavra[i] === letra) {
                        mostraPalavra[i] = letra
                    }
                }

                setNoPalavra(mostraPalavra)
            }
            else if (!arrayPalavra.includes(letra)) {
                setForca(forca + 1)
                console.log(forca)
            }
        }
    }

    else { console.log("Não há palavra para acrescentar letra") }
}
