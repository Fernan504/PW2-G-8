import {NavLink} from 'react-router-dom';

function NavBarItems ({label, uri}){
    return(
        <li className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap hover:text-white">
            <NavLink to={uri}>{label}</NavLink>
        </li>
    );
}

export default NavBarItems;