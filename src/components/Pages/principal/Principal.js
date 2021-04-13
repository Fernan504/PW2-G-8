import TablaContenido from './TablaContenido';
import Seccion from './Seccion';
import arquitectura_l from '../../assets/img/bg-arquitectura_l.jpg';
import arquitectura_s from '../../assets/img/bg-arquitectura_s.jpg';
import construccion_l from '../../assets/img/bg-construccion_l.jpg';
import construccion_s from '../../assets/img/bg-construccion_s.jpg';
import remodelacion_l from '../../assets/img/bg-remodelacion_l.jpg' 
import remodelacion_s from '../../assets/img/bg-remodelacion_s.jpg'
import pintura_l from '../../assets/img/bg-pintura_l.jpg';
import pintura_s from '../../assets/img/bg-pintura_s.jpg';
import metalicas_l from '../../assets/img/bg-metalicas_l.jpg';
import metalicas_s from '../../assets/img/bg-metalicas_s.jpg';
import electricidad_l from '../../assets/img/bg-electricidad_l.jpg';
import electricidad_s from '../../assets/img/bg-electricidad_s.jpg';
import maquinaria_l from '../../assets/img/bg-maquinaria_l.jpg';
import maquinaria_s from '../../assets/img/bg-maquinaria_s.jpg';
import elec_l from '../../assets/img/electricidad_l.jpg';
import elec_s from '../../assets/img/electricidad_s.jpg';
import moderna_l from '../../assets/img/arquitectura_l.jpg';
import moderna_s from '../../assets/img/arquitectura_s.jpg';
import remo_l from '../../assets/img/remodelacion_l.jpg';
import remo_s from '../../assets/img/remodelacion_s.jpg'


function Principal(){
    return(
        <main className="flex flex-col justify-center items-center">
            <div className="p-4 flex flex-col justify-center items-center  h-64 md:h-80 lg:h-96 w-full bg-hero-sm bg-cover bg-no-repeat lg:bg-hero-lg  text-white space-y-2">
                <h2 className="text-lg md:text-2xl lg:text-4xl font-bold"><span className="text-indigo-800 text-shadow-w">Constructora CMHN </span><span className="text-shadow-i">te ofrece una <span className="block text-center">variedad de servicios</span></span></h2>
                <a class="text-lg lg:text-3xl font-semibold bg-indigo-800 p-2 md:p-3 rounded shadow hover:bg-indigo-600" href="#">Contáctanos</a>
            </div>
            <section className="flex flex-col justify-center items-center sm:p-1 md:p-5 space-y-6 lg:flex-row lg:space-x-16 lg:space-between lg:items-start lg:text-2xl md:container md:mx-auto">
                <TablaContenido></TablaContenido>
                <section className="p-2 md:p-3 space-y-5 rounded lg:w-3/5">
                    <Seccion id="arquitectura" img_alt="Arquitectonico" titulo="Arquitectura" img_lg={arquitectura_l} img_sm={arquitectura_s} descripcion="Te brindamos la mejor experiencia en asistencia arquitectonica ya que contamos con los mejores arquitectos del pais e incluso internacionales, solo les diras las ideas que no te dejan dormir en la noche por la emocion y ellos se encargaran de plasmarla en papel, en colaboracion con nuestros ing. civiles para que tu proyecto lleve hasta el ultimo detalle necesario."/>
                    <Seccion id="construccion" imgalt="Edificio en Construccion" titulo="Construccion" img_lg={construccion_l}  img_sm={construccion_s} descripcion="Te realizamos la construccion adecuada a tus necesidades o requerimientos, contamos con los mejores Ingenieros civiles, Arquitectos, Operatistas de maquinaria, Albaniles. Cada uno de ellos tienen nuestra confianza para particpar en tu proyecto, solo dinos que quieres que te construyamos y ellos se encargaran."/>
                    <Seccion id="remodelacion" img_alt="Remodelacion" titulo="Remodelacion" img_lg={remodelacion_l} img_sm={remodelacion_s} descripcion="Te damos el mejor contrato para que cumplas tu sueno de remodelar tu hogar u oficina, no importa si es el exterior o el interior, nosotros nos encargamos de convertir tu hogar u oficina en uno completamente nuevo o de tu preferencia."/>
                    <Seccion id="pintura" img_alt="Pintura de casa" titulo="Pintura" img_lg={pintura_l} img_sm={pintura_s} descripcion="No sabes si esos muros que ves todos los dias necesitan pintarse, o que color debes pintarlos, no te preocupes, contamos con personal altamente adecuado para remodelacion, que te asesoraran con esos muros, y no solo eso te la pintaran con las mejores tecnicas o de la forma que tu gustes."/>            
                    <Seccion id="metalicas" img_alt="Estructura metalica" titulo="Estructuras Metalicas" img_lg={metalicas_l} img_sm={metalicas_s} descripcion="Especialistas en Estructuras Metálicas desde hace más de dos decadas. Diseñamos y construimos edificios, naves industriales, bodegas, oficinas, hangares"/>
                    <Seccion id="electricidad" img_alt="Electricista" titulo="Electricidad" img_lg={electricidad_l} img_sm={electricidad_s} descripcion="Somos especialistas en asesoramiento para eficiencia energética, mantenimiento de instalaciones, montaje e instalación de cuadros eléctricos, instalación y mantenimiento de alumbrado, sistemas contraincendios."/>
                    <Seccion id="maquinaria" img_alt="Maquina" titulo="Maquinaria" img_lg={maquinaria_l} img_sm={maquinaria_s} descripcion="Contructora CMHN está especializada en la venta y compra de maquinaria de construcción "/>            

                    <h2 id="proyectos"class="text-center font-bold border-b">Proyectos realizados</h2>

                    <Seccion img_lg={elec_l} img_sm={elec_s} titulo="Electricidad"/>
                    <Seccion img_lg={remo_l} img_sm={remo_s} titulo="Remodelación"/>
                    <Seccion img_lg={moderna_l} img_sm={moderna_s} titulo="Arquitectura Moderna"/>
                </section>
            </section>
        </main>
        
    );
}

export default Principal;