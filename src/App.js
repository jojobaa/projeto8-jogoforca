import React, { useState } from 'react'
import Palavras from './Palavras'
import Letters from './Letters'

import "./style.css"

import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


export default function App() {

    const [arrayLetra, setArrayLetra] = useState([])
    const [arrayPalavra, setArrayPalavra] = useState([])
    const [forca, setForca] = useState(0)
    const [noPalavra, setNoPalavra] = useState([])
    const [caracteres, setCaracteres] = useState('')
    const [cor, setCor] = useState('')
    const [chute, setChute] = useState('')
    const [disabled, setDisabled] = useState(true)

    function escolherPalavra() {
        setArrayLetra([])
        setForca(0)
        setChute('')
        setDisabled(false)
        const palavraAleatoria = Math.floor(Math.random() * Palavras.length)
        setArrayPalavra(Palavras[palavraAleatoria].split(''))
        setCaracteres(Palavras[palavraAleatoria].normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
        setNoPalavra(Array(Palavras[palavraAleatoria].length).fill('_'))
    }
    console.log(arrayPalavra)

    function clicarLetra(letra) {

        if (noPalavra.includes('_')) {
            if (forca < 6) {
                const mostraPalavra = [...noPalavra]
                const novasLetras = arrayLetra.includes(letra) ? arrayLetra : [...arrayLetra, letra]
                setArrayLetra(novasLetras)
                console.log(novasLetras)

                if (caracteres.includes(letra)) {
                    for (let i = 0; i < caracteres.length; i++) {
                        if (caracteres[i] === letra) {
                            mostraPalavra[i] = arrayPalavra[i]
                        }
                    }

                    setNoPalavra(mostraPalavra)
                }
                else if (!arrayPalavra.includes(letra)) {
                    setForca(forca + 1)
                }
            }
        }
    }

    function completaForca() {
        if (forca === 0) {
            return <img src={forca0} alt='' />
        }
        else if (forca === 1) {
            return <img src={forca1} alt='' />
        }
        else if (forca === 2) {
            return <img src={forca2} alt='' />
        }
        else if (forca === 3) {
            return <img src={forca3} alt='' />
        }
        else if (forca === 4) {
            return <img src={forca4} alt='' />
        }
        else if (forca === 5) {
            return <img src={forca5} alt='' />
        }
        else if (forca === 6) {
            return <img src={forca6} alt='' />
        }
    }

    function chutar() {
        if (chute === '') {
            alert('Escreva algo')
        } else if (chute === caracteres || chute === arrayPalavra.join('')) {
            setCor('corVerde')
            setNoPalavra([...arrayPalavra])
            setChute('')
        } else {
            setForca(6)
            setCor('corVermelho')
            setNoPalavra([...arrayPalavra])
            setChute('')
        }
    }
    console.log(chute)

    function condicaoCores() {
        if (forca > 5) {
            return 'corVermelho'
        } else if (forca < 6 && noPalavra.includes("_")) {
            return 'corInicial'
        } else if (forca < 6 && !noPalavra.includes("_")) {
            return 'corVerde'
        }
    }

    const chamaForca = completaForca()
    const condicaoCor = condicaoCores()

    return (
        <div className='layout'>
            <div className='forca-botao'>
                <div className='forca' data-identifier='game-image' >{chamaForca}</div>
                <div>
                    <button data-identifier="choose-word" onClick={escolherPalavra} className='escolherPalavra' forca={forca}>{(forca < 6 ) ? "Escolher Palavra" : "Reiniciar"}</button>
                    <div className={condicaoCor} data-identifier='word' forca={forca} >{(forca < 6) ? noPalavra : arrayPalavra}</div>
                </div>
            </div>
            <Letters data-identifier='letter' clickLetra={clicarLetra} arrayLetra={arrayLetra} />
            <div className='input' chutar={setChute} guess={chutar}>
                <p>Já sei a palavra!</p>
                <input onChange={((c)=> setChute(c.target.value))} data-identifier='type-guess' type='text' disabled={disabled} />
                <button onClick={chutar} chute={chute} data-identifier='guess-button'>chutar</button>
            </div>
        </div>
    )
}
