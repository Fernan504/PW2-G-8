import Brand from "./Brand";
import DropDown from "../NavBars/navExample";
import NavBar from "../NavBars/NavBar";
import NavLinks from "../NavBars/NavLink";
import Imagen from "./log2.png";
import NavItems from "../NavBars/NavItems";

function BrandHeader({title}){
    return(
        <header className="relative bg-white shadow-2xl">  
          <div class="w-full mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-start md:items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="block content-center justify-items-center text-center pl-10">
                <img src={Imagen} alt="Logo CMHN" className="w-20 p-0 ml-8"/>
                <Brand title={title}></Brand>
              </div>
              <div class="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img class="h-8 w-auto sm:h-10 rounded-full" src="https://placehold.it/100x100" alt=""/>
                </a>
              </div>
              <nav class="block md:flex" id="">
                  <NavItems uri="/" label="Inicio"></NavItems>
                  <DropDown></DropDown>
                  <NavItems uri="/Contacto" label="Contacto"></NavItems>
                  <NavItems uri="/Mas" label="Mas"></NavItems>
              </nav>
            </div>
          </div> 
        </header>
    );
}

export default BrandHeader;