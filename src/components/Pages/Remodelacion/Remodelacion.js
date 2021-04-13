import imgRem1 from "./img/casual.jpg";
import imgRem2 from "./img/arquite.jpg";
import imgRem3 from "./img/remm.jpg";
import imgRem4 from "./img/remodeRecic.jpg";

import imgInt1 from "./img/interiores.jpg";
import imgInt2 from "./img/interiores2.jpg";

import imgExt1 from "./img/exteriores.jpg";
import imgExt2 from "./img/exxxx.jpg";

import "./remodelacion.css";

function Remodelacion(){
    return(
        <main className="text-center -m-12 items-center justify-items-center overflow-hidden clear-both">
        <h1 className=" items-center m-20" >Remodelaciones</h1>
                <section className="pinturas flex flex-wrap items-center justify-items-center mr-12 ml-12 rounded-lg">
                    
                    <section className="shadow-2xl">
                        <h3>Remodelacion Casual</h3>
                        <img src={imgRem1}></img> 
                    </section>
                    <section className="shadow-2xl">
                        <h3>Remodelacion Estilo Arquitectonico</h3>
                        <img src={imgRem2}></img>
                        
                    </section>
                    <section className="shadow-2xl">
                        <h3>Remodelacion</h3>
                        <img src={imgRem3}></img>
                    </section>
                    <section className="shadow-2xl">
                        <h3>Remodelacion usando recicleje</h3>
                        <img src={imgRem4}></img>
                    </section>
                </section>

                    
                <h2>Remodelaciones Interiores</h2>
                <section className="pinturas flex flex-wrap items-center justify-items-center mr-12 ml-12 rounded-lg">
                    <section className="shadow-2xl">
                        <h3>Remodelacion Casual</h3>
                        <img src={imgInt1}></img>  
                    </section>
                    <section className="shadow-2xl">
                        <img src={imgInt2}></img>
                    </section>
                </section>
            
                <h2>Remodelaciones Exteriores</h2>
                <section className="pinturas flex flex-wrap items-center justify-items-center mr-12 ml-12 rounded-lg">
                    <section className="shadow-2xl">
                        <img src={imgExt1}></img>
                    </section>
                    <section className="shadow-2xl">
                        <img src={imgExt2}></img>
                    </section>
            </section>
        </main>

    )
}
export default Remodelacion;