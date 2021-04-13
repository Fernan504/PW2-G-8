import NewContact from "./NewContact";
import { useEffect, useState } from 'react';
import firebaseSDK from '../../../FireBaseInit';


function Contacto(){
    
        const [contactData, setContactData] = useState({
            contacts:[],
            Nombre:"",
            Email:"",
            Numero:"",
            Titulo:"",
            Descripcion:"",
            waiting:false
        });

        var validators = {
            "telefono": /^\+?\(?504\)?-?[1-9]\d{3}-?\d{4}$/,
            "correo": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
            "isEmpty": /^\s*$/,
            "doublespace":/\s{2,}/,
            "titulo": /^[a-zA-Z]{5,15}$/
          };
          var errors = [];
        
          const onChange = (e)=>{
            const {name, value} = e.currentTarget;
            setContactData({...contactData, Nombre: value});
        };

          const onChange1 = (e)=>{
            const {name, value} = e.currentTarget;
            setContactData({...contactData, Email: value});
        };
          const onChange2 = (e)=>{
            const {name, value} = e.currentTarget;
            setContactData({...contactData, Numero: value});
        };

          const onChange3 = (e)=>{
            const {name, value} = e.currentTarget;
            setContactData({...contactData, Titulo: value});
        };

        const onChange4 = (e)=>{
          const {name, value} = e.currentTarget;
          setContactData({...contactData, Descripcion: value});
        };

          
          const onAddNew = (e)=>{
            e.preventDefault();
            e.stopPropagation();
            if (validators.isEmpty.test(contactData.Nombre)){
              errors.push("El Nombre NO puede ir vacío.");
            }
            if (validators.doublespace.test(contactData.Nombre)) {
              errors.push("No debe contener doble espacios entre valores");
            }
            if (!validators.correo.test(contactData.Email)) {
              errors.push("El correo no tiene el formato adecuado.");
            }
            if (!validators.telefono.test(contactData.Numero)) {
                errors.push("El numero de telefono no es aceptado.");
              }
            if (!validators.titulo.test(contactData.Titulo)) {
                errors.push("El titulo DEBE de contener entre 5 y 15 letras.");
              }
            if(errors.length > 0){
              alert(errors.join(" | "));
            } else {
              alert("Su mensaje ah sido enviado exitosamente, le contestaremos lo mas antes posible.");
              let data ={
                nombre: contactData.Nombre,
                email: contactData.Email,
                numero: contactData.Numero,
                titulo: contactData.Titulo,
                descripcion:contactData.Descripcion,
                id : new Date().getTime()
              };
              firebaseSDK.database().ref('contacto').push(data);
              
            }
          
          };
    return(
      <section className="text-center m-8">
        <h2 className="font-sans font-bold text-2xl md:text-5xl">Envianos tus datos, para poder atender tu consulta...</h2>
      <NewContact onAddNew={onAddNew} value={contactData.Nombre} value1={contactData.Email} value2={contactData.Numero} value3={contactData.Titulo} value4={contactData.Descripcion} onChange={onChange} onChange1={onChange1} onChange2={onChange2} onChange3={onChange3} onChange4={onChange4}></NewContact>
      </section>
      )
}

export default Contacto;