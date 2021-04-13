function Seccion(props) {
    return(
        <section className="flex flex-col w-full shadow-lg p-3 rounded bg-gray-200 hover:bg-blue-100 hover:shadow-lg" id={props.id}>
            <h3 className="text-center font-semibold">{props.titulo}</h3>
            <picture className="space-y-3 flex flex-col justify-center"> 
                <source className="rounded shadow" srcset={props.img_lg} media="(min-width:700px)"/>
                <img className="rounded shadow" src={props.img_sm} alt={props.img_alt} style={{width: 'auto'}} />
                <p>{props.descripcion}</p>
            </picture>
        </section>
        
    );
}

export default Seccion;