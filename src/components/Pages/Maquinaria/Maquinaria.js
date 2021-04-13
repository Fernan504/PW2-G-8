import Card from '../../Cards/MCard';
import I from '../../assets/img/CARGADORAS.jpg';
import I1 from '../../assets/img/EXCAVADORAS.jpg';
import I2 from '../../assets/img/MOTONIVELADORAS.jpg';
import I3 from '../../assets/img/RETROEXCAVADORAs.jpg';
import I4 from '../../assets/img/TRACTORESDEORUGA.jpg';
import I5 from '../../assets/img/VIBROCOMPACTADORES.jpg';

function Arquitectura(){
    return(
       <section className="flex flex-wrap w-full mt-10 lg:pl-56">
            <Card urli={I} Caption="CARGADORAS"></Card>
            <Card urli={I1} Caption="TRACTORES DE ORUGA"></Card>
            <Card urli={I2} Caption="RETROEXCAVADORAS" ></Card>
            <Card urli={I3} Caption="EXCAVADORAS" ></Card>
            <Card urli={I4} Caption="VIBROCOMPACTADORES" ></Card>
            <Card urli={I5} Caption="MOTONIVELADORAS"></Card>
       </section>

    );
}

export default Arquitectura;