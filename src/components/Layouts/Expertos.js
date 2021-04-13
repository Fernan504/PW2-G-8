function Expertos(props){
    return(
        <div className="flex flex-col justify-center items-center text-indigo-700">
           <h3 className="font-bold text-lg">{props.title}</h3>
           <img src={props.imgsrc} alt={props.imgalt} width="300px" height="300px"/>         
        </div>
    );
}

export default Expertos;