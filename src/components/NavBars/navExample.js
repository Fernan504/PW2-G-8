import { useState } from 'react';
import { Transition } from '@headlessui/react';
import NavBarItems from '../NavBars/NavBarItems';
import NavBarItems2 from '../NavBars/navBarItems2';
import NavBarItems3 from '../NavBars/navBarItems3';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:px-10 mt-0">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className=" inline-flex items-center">
      <li className="mx-8 md:mx-0 text-base font-medium text-gray-500 block px-3 py-2 hover:text-gray-900">  
            Servicios
        </li>
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-100"
      >
        {(ref) => (
          <div ref={ref} className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg">
            <div className="rounded-md bg-white shadow-xs">
                  <NavBarItems uri="/Arquitectura" label="Arquitectura"></NavBarItems>
                  <NavBarItems3 uri="/Construccion" label="Construccion"></NavBarItems3>
                  <NavBarItems3 uri="/Remodelacion" label="Remodelacion"></NavBarItems3>
                  <NavBarItems3 uri="/Pintura" label="Pintura"></NavBarItems3>
                  <NavBarItems3 uri="/EMetalicas" label="Estructuras Metalicas"></NavBarItems3>
                  <NavBarItems3 uri="/Electricidad" label="Electricidad"></NavBarItems3>
                  <NavBarItems2 uri="/Maquinaria" label="Maquinaria"></NavBarItems2>
            </div>
          </div>
        )}
      </Transition>
    </div>
  )
}

export default Dropdown; 