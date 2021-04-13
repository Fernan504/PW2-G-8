import imgInt1 from "./img/interior1.jpg";
import imgInt2 from "./img/interior2.jpg";
import imgInt3 from "./img/interior3.jpg";
import imgInt4 from "./img/interior4.jpg";
import imgInt5 from "./img/interior9.jpg";

import imgExt1 from "./img/exterior1.jpg";
import imgExt2 from "./img/exterior2.jpg";
import imgExt3 from "./img/exterior8.jpg";
import imgExt4 from "./img/exterior5.jpg";
import imgExt5 from "./img/exterior9.jpg";

import "./pinturas.css";

function Pinturas (){
    
    return(
        <main className="flex flex-col items-center justify-center p-7 text-4xl">
        
        <h2>Pintura en Interiores</h2>
        <p className="m-16"><cite>"Nadie es artista a menos que lleve su cuadro en la cabeza antes de pintarlo, y este seguro de su metodo y composicion"</cite><br/>-Claude Monet</p>
        <div class="container-all relative max-w-xl max-h-96 rounded-md overflow-hidden m-12 content-center">
                <input type="radio" id="1" name="interior-slide" hidden/>
                <input type="radio" id="2" name="interior-slide" hidden/>
                <input type="radio" id="3" name="interior-slide" hidden/>
                <input type="radio" id="4" name="interior-slide" hidden/>
                <input type="radio" id="5" name="interior-slide" hidden/>

                <div class="slide flex ">
                    <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                         
                        <img src={imgInt1} />  
                        
                    </div>
                    <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                        
                        <img src={imgInt2} />
                    
                    </div>
                    <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                        
                        <img src={imgInt3} />
                    
                    </div>
                    <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                        
                        <img src={imgInt4} />

                    </div>
                    <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                        
                        <img src={imgInt5} />

                    </div>
                </div>
                <div class="pagination absolute bottom-5 left-0 flex flex-wrap items-center justify-center w-full">
                        <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="1">
                        <img src={imgInt1} alt=""/> </label>
                        <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="2">
                        <img src={imgInt2} alt=""/> </label>
                        <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="3">
                        <img src={imgInt3} alt=""/> </label>
                        <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="4">
                        <img src={imgInt4} alt=""/> </label>
                        <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="5">
                        <img src={imgInt5} alt=""/> </label>
                </div>
        </div>
        <h2>Pintura en Exteriores</h2>
        <p className="m-16"><cite>"Un hombre pinta con su cerebro y no con sus manos"</cite><br/> -Miguel Angel</p>
        <div class="container-all relative max-w-xl max-h-96 rounded-md overflow-hidden m-12">
            <input type="radio" id="1-1" name="interior-slide" hidden/>
            <input type="radio" id="2-2" name="interior-slide" hidden/>
            <input type="radio" id="3-3" name="interior-slide" hidden/>
            <input type="radio" id="4-4" name="interior-slide" hidden/>
            <input type="radio" id="5-5" name="interior-slide" hidden/>

            <div class="slide flex">
                <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                    
                    <img src={imgExt1} />

                </div>
                <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                    
                    <img src={imgExt2} />

                </div>
                <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                    
                    <img src={imgExt3} />

                </div>
                <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">

                    <img src={imgExt4} />

                </div>
                <div class="item-slide relative flex flex-col flex-shrink-0 flex-grow-0 max-w-full">
                    
                    <img src={imgExt5} />  

                </div>
            </div>
            <div class="pagination absolute bottom-5 left-0 flex flex-wrap items-center justify-center w-full">
                <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="1-1">
                    <img src={imgExt1} alt=""/> </label>
                    <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="2-2">
                    <img src={imgExt2} alt=""/> </label>
                    <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="3-3">
                    <img src={imgExt3} alt=""/> </label>
                    <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="4-4">
                    <img src={imgExt4} alt=""/> </label>
                    <label class="pagination-item flex flex-col items-center border-white w-4 h-4 rounded overflow-hidden cursor-pointer mx-2 text-center" for="5-5">
                    <img src={imgExt5} alt=""/> </label>
            </div>
        </div>

    </main>
    )
}

export default Pinturas;