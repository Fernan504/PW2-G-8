

function rButton({type, id, forl ,fname, onChange, caption, value, error, ...attr}){
    return(
        <section>
            <label for={forl}>{caption}</label>
            <input type={type} id={id} name={fname} onChange={onChange} value={value} {...attr}/>
            {(error && true) ? (<section>{error}</section>):null}
        </section>
    );
}
export default rButton;