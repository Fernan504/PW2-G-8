function FormField({type, id, fname, onChange, value, error, ...attr}){
    return(
        <section>
            <input className="m-5 border-2 border-gray-300 w-full p-3" type={type} id={id} name={fname} onChange={onChange} value={value} {...attr}/>
            {(error && true) ? (<section>{error}</section>):null}
        </section>
    );
}

export default FormField;