import navLink from "../NavBars/navLink";
import dropNav from './dropNav';
import logo from "../imgs/imgs";
import drop from '../NavBars/navExample';

function TopNav({menu}){

  return(
        <div class="relative bg-white shadow-2xl">
          <div class="w-full mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-start md:items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
             <logo urli="#" descrip="Logo CMHN"/>
              <h1>Constructora CMHN</h1>
              <div class="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img class="h-8 w-auto sm:h-10 rounded-full" src="https://placehold.it/100x100" alt=""/>
                </a>
              </div>
              <nav class="block md:flex" id={menu}>
                <navLink uri="/" label="Inicio" />
                <drop></drop>
                <navLink uri="/" label="Contacto" />
                <navLink uri="/" label="Mas" />
              </nav>
             {/* <div class="-mr-2 -my-2 md:hidden">
                <button type="button" id={menubtn}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" id={openSVG} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className="h-6 w-6 hidden" id={closeSVG}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>*/}
            </div>
          </div>
        </div>
  )
}

export default TopNav;