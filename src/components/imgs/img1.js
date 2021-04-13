
function Imagenes({urli, descrip}){
    return(
            <img src={urli} alt={descrip} className="transform hover:scale-110 transition duration-300"/>
    )
}

export default Imagenes;