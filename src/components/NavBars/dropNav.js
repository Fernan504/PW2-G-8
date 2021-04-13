import navLink from '../NavBars/navLink';
import NavBarItems from './NavBarItems';
import NavBarItems2 from './navBarItems2';
import NavBarItems3 from './navBarItems3';
import './NavBar.css';


function dropNav(){

    return(   
            <div class="md:px-10 mt-0">
                <div class="dropdown inline-block relative transition-transform ">
                <button class="inline-flex items-center butt">
                  <navLink uri="#" text="Servicios"></navLink>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-content absolute text-gray-700 pt-1 hidden">
                  <NavBarItems uri="" label="Arquitectura"></NavBarItems>
                  <NavBarItems2 uri="" label="Construccion"></NavBarItems2>
                  <NavBarItems2 uri="" label="Remodelacion"></NavBarItems2>
                  <NavBarItems2 uri="" label="Pintura"></NavBarItems2>
                  <NavBarItems2 uri="" label="Estructuras Metalicas"></NavBarItems2>
                  <NavBarItems2 uri="" label="Electricidad"></NavBarItems2>
                  <NavBarItems3 uri="" label="Maquinaria"></NavBarItems3>
                </ul>
                </div>

                </div>
    )
}

export default dropNav;

