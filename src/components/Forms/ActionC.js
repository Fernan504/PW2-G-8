function FormAction({caption, onClick}){
    let myClasses = [
        "bg-transparent " , 
        "hover:bg-blue-500 " ,
        "text-blue-700 " ,
        "font-semibold ",
        "hover:text-white ",
        "py-2 ",
        "border ",
        "border-blue-500 ",
        "hover:border-transparent ", 
        "rounded ",
        "w-36"

    ];
    return(
            <button onClick={onClick} className={myClasses.join("")} >{caption}</button>
    );
}

export default FormAction;