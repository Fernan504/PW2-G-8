function TablaContenido() {
    return(
        <div className="bg-gray-700 mt-3 p-3 text-white text-sm w-max rounded hover:shadow lg:sticky lg:top-5 lg:text-l">
            <h2 className="font-bold border-b text-center">Contenido</h2>
            <ul className="list-disc list-inside">
                <li><a href="#ar" className="hover:underline">Areas</a> 
                    <ol className="list-decimal list-inside ml-6">
                        <li><a href="#arquitectura" className="hover:underline">Arquitectura</a></li>
                        <li><a href="#construccion" className="hover:underline">Construcción</a></li>
                        <li><a href="#remodelacion" className="hover:underline">Remodelación</a></li>
                        <li><a href="#pintura" className="hover:underline">Pintura</a></li>
                        <li><a href="#metalicas" className="hover:underline">Estructuras Metálicas</a></li>
                        <li><a href="#electricidad" className="hover:underline">Electricidad</a></li>
                        <li><a href="#maquinaria" className="hover:underline">Maquinaria</a></li>
                    </ol>
                </li>
                <li><a href="#proyectos" className="hover:underline">Proyectos realizados</a></li>
            </ul>
        </div>
    );
}

export default TablaContenido;