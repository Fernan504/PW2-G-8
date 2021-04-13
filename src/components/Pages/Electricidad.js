import Servicio from '../Layouts/Servicio';
import Expertos from '../Layouts/Expertos';
import checklist from '../assets/img/checklist3.svg';
import uno from '../assets/img/uno3.jpg';
import dos from '../assets/img/DosE.png';
import tres from '../assets/img/tres3.jpg';
import cuatro from '../assets/img/cuatro3.jpg';
import cinco from '../assets/img/cinco3.jpg';
import seis from '../assets/img/seis3.jpg';
import equipo from '../assets/img/pie_chart3.svg';
import administracion from '../assets/img/search_engine3.svg';
import seguriadad from '../assets/img/security3.svg';
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
                    <Servicio numero="1" nombre="Energia" descripcion="Todo en Intalacion y reparacion de Transformadores, Residencial y comercial."/>
                    <Servicio numero="2" nombre="Presupuesto" descripcion="Nos adaptamos a su presupuesto para mejorar las condiciones de Instalación."/>
                    <Servicio numero="3" nombre="Reparacion y Protección" descripcion="Realizamos cada reparacion electrica y contamos con servicios de protecion eficaz."/>
                </div>
                    
            </section>
            <section class="container flex flex-col items-center justify-center space-y-2">
                <h2 class="text-3xl text-center font-bold text-indigo-700">Trabajos</h2>
                <div class="flex flex-col justify-center items-center gap-2 md:gap-6 md:grid md:grid-cols-3">
                    <Im urli={uno} class="w-11/12 rounded shadow" alt=""/>
                    <Im urli={dos} class="w-11/12 rounded shadow" alt=""/>
                    <Im urli={tres} class="w-11/12 rounded shadow" alt=""/>
                    <Im urli={cuatro} class="w-11/12 rounded shadow" alt=""/>
                    <Im urli={cinco} class="w-11/12 rounded shadow" alt=""/>
                    <Im urli={seis} class="w-11/12 rounded shadow" alt=""/>
                </div>
            </section>
            <section className="container flex flex-col justify-center items-center space-y-12">
                <h2 class="text-3xl text-center font-bold text-indigo-700">Expertos en:</h2>
                <div className="md:flex md:justify-center md:items-center">
                    <Expertos title="Obras" imgsrc={equipo}></Expertos>
                    <Expertos title="Responsabilidad" imgsrc={administracion}></Expertos>
                    <Expertos title="Organizacion" imgsrc={seguriadad}></Expertos>
                </div>
                
            </section>
        </main>
    )
}

export default Electricidad;