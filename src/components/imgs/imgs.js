
function Imagenes({urli, descrip}){
    return(
        <div className="w-12">
            <img src={urli} alt={descrip} className="h-12"/>
        </div>
    )
}

export default Imagenes;