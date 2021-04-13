
function NavLinks({label, uri}){
    return(
        
        <li className="mx-8 md:mx-0 text-base font-medium text-gray-500 block px-3 py-2 hover:text-gray-900">
            <a href={uri}>{label}</a>
        </li>
       
    )
}

export default NavLinks;