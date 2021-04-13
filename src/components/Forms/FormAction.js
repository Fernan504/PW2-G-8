function FormAction({caption, onClick, className}){
    return(
        <button onClick={onClick} className={className}>{caption}</button>
    );
}

export default FormAction;