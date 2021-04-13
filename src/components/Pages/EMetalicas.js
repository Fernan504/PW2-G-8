import Servicio from '../Layouts/Servicio';
import Expertos from '../Layouts/Expertos';
import checklist from '../assets/img/checklist.svg';
import uno from '../assets/img/uno.jpg';
import dos from '../assets/img/dos.jpg';
import tres from '../assets/img/tres.jpg';
import cuatro from '../assets/img/cuatro.jpg';
import cinco from '../assets/img/cinco.jpg';
import seis from '../assets/img/seis.jpg';
import equipo from '../assets/img/pie_chart.svg';
import administracion from '../assets/img/search_engine.svg';
import seguriadad from '../assets/img/security.svg';
import Im from '../imgs/img1';

function Electricidad(){
    return(
        <main class="flex flex-col justify-center items-center space-y-8">
            <h1 class="text-3xl text-center font-bold text-indigo-700 mt-4 md:mt-6">Nuestros servicios</h1>
            <section class="flex flex-col justify-center space-y-5 md:flex-row border-b p-3">
                <div class="flex flex-col justify-center items-center">
                    <img src={checklist} alt="" width="500px" height="500px"/>
                </div>
                <div class="space-y-8 text-center">
                    <Servicio numero="1" nombre="Mantenimiento" descripcion="Trabajo de Mantenimiento de estructuras de techo, portones, edificios y mas."/>
                    <Servicio numero="2" nombre="Fabricación" descripcion="Fabricación de Estructuras Metálicas y cerrajeria en General."/>
                    <Servicio numero="3" nombre="Estructuras" descripcion="Nos enfocamos en crear cualquier tipo des estructura para complacer al cliente."/>
                </div>
                    
            </section>
            <section class="container flex flex-col items-center justify-center space-y-2 Trabajos">
                <h2 class="text-3xl text-center font-bold text-indigo-700">Trabajos</h2>
                <div class="flex flex-col justify-center items-center gap-2 md:gap-6 md:grid md:grid-cols-3">
                    <Im urli={uno} className="w-11/12 rounded shadow" descrip=""/>
                    <Im urli={dos} className="w-11/12 rounded shadow" alt=""/>
                    <Im urli={tres} className="w-11/12 rounded shadow" alt=""/>
                    <Im urli={cuatro} className="w-11/12 rounded shadow" alt=""/>
                    <Im urli={cinco} className="w-11/12 rounded shadow" alt=""/>
                    <Im urli={seis} className="w-11/12 rounded shadow" alt=""/>
                </div>
            </section>
            <section className="container flex flex-col justify-center items-center space-y-12">
                <h2 class="text-3xl text-center font-bold text-indigo-700">Expertos en:</h2>
                <div className="md:flex md:justify-center md:items-center">
                    <Expertos title="Construcción" imgsrc={equipo}></Expertos>
                    <Expertos title="Remodelación" imgsrc={administracion}></Expertos>
                    <Expertos title="Creación" imgsrc={seguriadad}></Expertos>
                </div>
                
            </section>
        </main>
    )
}

export default Electricidad;