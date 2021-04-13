function FormField2({type, id, fname, onChange, value, placeholder, error, ...attr}){
  
    return(
        <section className="p-0">
            <textarea className="h-36 w-full mb-4 text-base p-3 border-2 rounded-lg border-blue-400 hover:shadow-lg md:col-span-2" type={type} id={id} name={fname} onChange={onChange} value={value} placeholder={placeholder} {...attr}></textarea>
            {(error && true) ? (<section>{error}</section>):null}
        </section>

    );
}

export default FormField2;