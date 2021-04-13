function Form1({children}) {
    return(
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-6 w-1/2 items-center m-auto ">
            {children}
        </form>
    );
}

export default Form1;