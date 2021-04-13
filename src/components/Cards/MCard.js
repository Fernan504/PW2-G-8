function MCard({urli, Caption}){
    return(
       <section className="rounded-md border-2 border-gray-300 lg:w-1/5 md:w-2/5 lg:m-16 md:m-5 m-1 w-full transform hover:scale-105 transition duration-300">
           <div className="border-2 border-gray-300 p-0 w-full">
                <img src={urli}/>
           </div>
           <div className="">
                <h2 className="text-center font-semibold">{Caption}</h2>
           </div>
       </section>
    );
}

export default MCard;