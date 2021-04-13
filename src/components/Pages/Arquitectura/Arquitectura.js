import Servicio from '../../Layouts/Servicio';
import Expertos from '../../Layouts/Expertos';
import checklist from '../../assets/img/checklist1.svg';
import uno from '../../assets/img/uno1.jpg';
import dos from '../../assets/img/dos2.jpg';
import tres from '../../assets/img/tres2.jpg';
import cuatro from '../../assets/img/cuatro4.jpg';
import cinco from '../../assets/img/cinco5.jpg';
import seis from '../../assets/img/seis6.jpg';
import equipo from '../../assets/img/pie_chart1.svg';
import administracion from '../../assets/img/search_engine1.svg';
import seguriadad from '../../assets/img/security1.svg';
import Im from '../../imgs/img1';

function Arquitectura(){
    return(
        <main class="flex flex-col justify-center items-center space-y-8">
            <h1 class="text-3xl text-center font-bold text-indigo-700 mt-4 md:mt-6">Nuestros servicios</h1>
            <section class="flex flex-col justify-center space-y-5 md:flex-row border-b p-3">
                <div class="flex flex-col justify-center items-center">
                    <img src={checklist} alt="" width="500px" height="500px"/>
                </div>
                <div class="space-y-8 text-center">
                    <Servicio numero="1" nombre="Construccion" descripcion="El principal desafío de diseñar nuevos espacios o incluso modernizar los existentes."/>
                    <Servicio numero="2" nombre="Diseño" descripcion="Creamos el Diseño que tu quieras, solo dejanos hacer tus sueño realidad no importa cual sea."/>
                    <Servicio numero="3" nombre="Arquitectura" descripcion="Contamos con las Herammientas modernas para trabajar de la mejor forma posible."/>
                </div>
            </section>
            <section class="container flex flex-col items-center justify-center space-y-2">
                <h2 class="text-3xl text-center font-bold text-indigo-700">Trabajos</h2>
                <div class="flex flex-col justify-center items-center gap-2 md:gap-4 md:grid md:grid-cols-3">
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
                    <Expertos title="Trabajo en equipo" imgsrc={equipo}></Expertos>
                    <Expertos title="Administracion" imgsrc={administracion}></Expertos>
                    <Expertos title="Seguridad" imgsrc={seguriadad}></Expertos>
                </div>
                
            </section>
        </main>
    );
}

export default Arquitectura;