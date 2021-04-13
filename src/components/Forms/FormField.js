function FormField({type, id, fname, onChange, value, placeholder, error, ...attr}){
  
    return(
        <section className="">
            <input className="mb-4 w-full text-base p-3 border-2 rounded-lg border-blue-400 hover:shadow-lg" type={type} id={id} name={fname} onChange={onChange} value={value} placeholder={placeholder} {...attr}/>
            {(error && true) ? (<section>{error}</section>):null}
        </section>

    );
}

export default FormField;