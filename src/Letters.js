const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const alfabetoMinusculo = alfabeto.map(letra =>letra.toLowerCase())

export default function Letters(props) {

    return (
        <div className='alfabeto'>
            <div className='teclado'>
                {alfabetoMinusculo.map((letter, index) => {
                    return (
                        <button onClick={(() => props.clickLetra(letter, index))}
                            letrasClicadas={props.arrayLetra.includes(letter)}
                            key={index}
                            disabled={props.arrayLetra.includes(letter)} 
                           style={props.arrayLetra.includes(letter) ? { backgroundColor:'#9FAAB5'} : { backgroundColor:'#E1ECF4'}}> {letter}</button>
                    )
                }
                )
                }
            </div>
        </div>
    )
}