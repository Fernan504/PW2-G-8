import Facebook from "./facebook.png";
import Insta from "./instagram.png";
import Twit from "./gorjeo.png";

function Footer(){
        return(
          <section className="bg-black text-white mb-0 p-0">
              <section className="md:flex m-auto mt-6 p-20 text-center justify-center">
                  <section className="md:inline m-10 border-b-2 md:border-b-0 md:border-r-2 md:flex-1">
                     <h2 className="text-center mb-3">About us...</h2>
                     <h3 className="mb-3"> CMHN@gmail.com</h3>
                     <h3 className="mb-3"><a href="">Contactenos</a></h3>
                     <h3 className="mb-3"><a href="">¿Quienes somos?</a></h3>
                  </section>
                  <section class="md:inline m-10  border-b-2 md:border-b-0 md:border-r-2 md:flex-1">
                     <h2 className="text-center mb-3">Contenido</h2>
                     <ul className="m-2">
                     <li className="m-2"><a href="index.html">Principal</a></li>
                     <li className="m-2"><a href="Arquitectura.html">Arquitectura</a></li>
                     <li className="m-2"><a href="servicios.html">Construccion</a></li>
                     <li className="m-2"><a href="remodelacion.html">Remodelacion</a></li>
                     <li className="m-2"><a href="Pinturas.html">Pintura</a></li>
                     <li className="m-2"><a href="eMetalicas.html">Estructuras Metalicas</a></li>
                     <li className="m-2"><a href="Electricidad.html">Electricidad</a></li>
                </ul>
                  </section>
                  <section class="md:inline m-10 justify-center border-b-2 md:border-b-0 md:flex-1">
                      <h2 className="text-center mb-4">Nuestras Redes Sociales</h2>
                      <div className="md:mt-6"><a href="http://www.facebook.com" target="_blank"><img src={Facebook} alt="Logo de facebook" className="pl-12 md:pl-56"/> <h3>Facebook</h3></a></div>
                    <div className="md:mt-6"><a href="https://www.instagram.com/" target="_blank"> <img src={Insta} alt="Logo de instagram" className="pl-12 md:pl-56"/> <h3>Instagram</h3></a></div>
                    <div className="md:mt-6"><a href="https://twitter.com" target="_blank"><img src={Twit} alt="Logo de twitter" className="pl-12 md:pl-56"/> <h3>Twitter</h3></a></div>
                  </section>
              </section>
              <p class="text-center">Derechos Reservados &copy; 2020</p>
          </section>
                            
                        
           
        )

}

export default Footer;