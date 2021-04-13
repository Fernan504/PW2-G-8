function Servicio(props){
    return(
        <div class="flex flex-col justify-center items-center space-x-3 text-indigo-700">
            <div class="flex justify-center items-center">
                <span class="bg-indigo-700 text-white font-bold rounded-full h-8 w-8 flex flex-col items-center">{props.numero}</span>
                <h2 class="font-bold text-2xl">{props.nombre}</h2>
            </div>
            <div>
                <p class="font-semibold">{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Servicio;