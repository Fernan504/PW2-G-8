import his from './edificio_hist.jpg';
import mis from './mision.jpg';
import vis from './vision.jpg';


function Mas(){
    return(
        <section>
            <h1 className="text-center font-bold font-sans text-lg md:text-2xl m-4 p-4">¿QUIENES SOMOS?</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6 m-7 p-7">
            <section className="historia md:col-span-2 md:flex border-2 border-gray-200 shadow-2xl">
                <h2 className="mx-4 my-8 md:my-24 font-bold font-sans">HISTORIA</h2>
                <p className="text-justify m-4 font-serif font-medium">Nace por la iniciativa empresarial y deseos de crecimiento personal y profesional de sus dos principales socios fundadores, los Ingenieros Juan Antonio Perez y Mauricio Mejia, quienes vieron una excelente oportunidad en la necesidad que tenían empresas de talla internacional.
                Fuimos la primera constructora en Centroamericana y del Caribe en obtener la certificación de gestión calidad ISO 9001:2000, y en el año 2004, volvimos a ser los primeros en obtener la certificación de Salud y Seguridad Ocupacional, bajo  la norma OHSAS 18001:1999.
                Nuestra filosofía de trabajo está basada en los más altos principios éticos y valores empresariales, apegados a nuestro código de conducta y nuestras políticas de calidad, seguridad ocupacional, eficiencia, medio ambiente y de servicio al cliente.
                La empresa continúa en su proceso de crecimiento y desarrollo, dedicada al ramo de la construcción de Obras, Diseño, Consultoría e Interventoría;  teniendo una excelente referencia en el mercado por la diversidad y calidad de servicios; así como también la ampliación de sus clientes, lo que nos ha permitido posicionarnos y crecer de una manera muy importante.</p>
         
                <img id="edificio" src={his} alt="Edificio en construcción" className=" md:w-96 md:h-96 md:border-2 md:m-4 m-0 mt-4"/>  
             
            </section>
            
                <section className="vision md:flex border-2 border-gray-200 shadow-2xl">                
                    <h2 className="my-8 md:my-24 mx-4 font-bold font-sans">VISION</h2>
                    <p className="text-justify m-4 font-serif font-medium">"Ser una empresa líder en construcción y consultoría, reconocida por su capacidad, calidad y cumplimiento de las más exigentes normas de seguridad; utilizando procedimientos constructivos innovadores que permiten construir obras más confortables, que proporcionan un mejor estándar de vida a la población que confian en nosotros"</p>
                    
                         <img id="view" src={vis} alt="Montaña desde su punto mas alto que representa la vision" className="md:w-40 md:h-40 md:m-4 mt-4 md:border-gray-200 md:shadow-lg"/>  
                   
                </section>
                <section className="mision md:flex border-2 border-gray-200 shadow-2xl">                
                    <h2 className="my-8 md:my-24 mx-4 font-bold font-sans">MISION</h2>                    
                    <p className="text-justify m-4 font-serif font-medium">Nuestra misión como empresa constructora es colaborar de manera proactiva en el desarrollo de nuestro país y del mundo con la más minuciosa atención al crecimiento y necesidades de nuestros clientes. Desarrollando proyectos, y construcciones con los más exigentes estándares, en seguridad, calidad y puntualidad.</p> 
                    <img id="mission" src={mis} alt="Mision" className="md:w-40 md:h-40 m-0 mt-4 md:m-4 md:border-gray-200 md:shadow-lg"/>  
                    
                </section>
          
        </section>
        </section>
    )
}

export default Mas;