function FormField({ id, fname, rows, onChange, value, error, ...attr}){
    return(
        <section className="md:col-span-2 border-2 border-gray-300 m-5 p-3">
            <textarea className="  w-full" id={id} name={fname} rows={rows} onChange={onChange} value={value} {...attr}/>
            {(error && true) ? (<section>{error}</section>):null}
        </section>
    );
}

export default FormField;