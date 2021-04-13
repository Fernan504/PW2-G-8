import Formulario from "../../Forms/FormC";
import RButton from "../../Forms/RButton";
import Fields from "../../Forms/FieldsC";
import TextArea from "../../Forms/TextArea";
import Button from "../../Forms/ActionC";
import "./contruccion.css";
import { useEffect, useState } from 'react';
import firebaseSDK from '../../../FireBaseInit';
import img1 from "../../assets/img/Control de inundaciones.png";
import img2 from "../../assets/img/Drenaje pluvial y sanitario.jpg";
import img3 from "../../assets/img/Edificacion general.jpg";
import img4 from "../../assets/img/Instalaciones de recreacion.jpg";
import img5 from "../../assets/img/Mantenimiento vial.jpg";
import img6 from "../../assets/img/Pavimentacion y flexible.jpg";
import img7 from "../../assets/img/Preparacion de suelos.jpg";
import img8 from "../../assets/img/Puentes.jpg";
import img9 from "../../assets/img/Sistema de agua potable.jpg";


function Construccion(){
    const [formData, setFormData] = useState({
        Nombre : "",
        Email : "",
        Titulo: "",
        descripcion: "",
        rbutton: ""
      });

      var validators = {
        "correo": /^([\w-]+(?:\.[\w-]+))@((?:[\w-]+\.)\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
        "isEmpty": /^\s*$/,
        "doublespace":/\s{2,}/,
        "titulo": /^[a-zA-Z]{5,15}$/
      };
      var errors = [];
    
      const onChange = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, Nombre: value});
    };

      const onChange1 = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, Email: value});
    };
      const onChange2 = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, Titulo: value});
    };

      const onChange3 = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, descripcion: value});
    };

    
    const onAddStart = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, rbutton: value});
    };
    const onAddStart1 = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, rbutton: value});
    };
    const onAddStart2 = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, rbutton: value});
    };
    const onAddStart3 = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, rbutton: value});
    };
    
    const onAddStart4 = (e)=>{
        const {name, value} = e.currentTarget;
        setFormData({...formData, rbutton: value});
    };
      
      const onAddNew = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (validators.isEmpty.test(formData.Nombre)){
          errors.push("El Nombre NO puede ir vacío.");
        }
        if (validators.doublespace.test(formData.Nombre)) {
          errors.push("No debe contener doble espacios entre valores");
        }
        if (!validators.titulo.test(formData.Titulo)) {
            errors.push("El titulo DEBE de contener entre 5 y 15 letras.");
          }
        if(errors.length > 0){
          alert(errors.join(" | "));
        } else {
          alert("Gracias por calificar nuestro servicio.");
          let data ={
            nombre: formData.Nombre,
            email: formData.Email,
            titulo: formData.Titulo,
            descripcion:formData.descripcion,
            resena: formData.rbutton,
            id : new Date().getTime()
          };
          firebaseSDK.database().ref('resena').push(data);
          
        }
      
      };
      
    return(
        <main className="m-8">
        <h1 className="text-center m-5 font-bold text-2xl">CONSTRUCCION</h1>
        <p className="text-center">Si desea saber mas acerca de cada servicio de click sobre uno de ellos o ponga el cursor encima.</p>

        <section class="servicios" className="servicios flex flex-wrap justify-items-center items-center w-full h-full">
            

            <section class="carta relative w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section className="cfrente absolute w-full h-full z-10">
                    <img src={img9}></img>
                    <h3>Sistema de agua potable</h3>
                </section >
                <section className="catras w-full h-full ">
                    <h3>Sistema de agua potable</h3>
                    <p className="m-2.5">Hemos creado una gran cantidad de sistemas de agua potable, que nos avalan </p>
                    <h3>$100,000</h3>
                </section>
            </section>

            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    <img src={img6}></img>
                    <h3>Pavimentacion y flexible</h3>
                </section>
                <section class="catras w-full h-full"> 
                    
                    <h3>Pavimentacion y flexible</h3>
                    <p className="m-2.5">Tenemos equipos especializados en la construccion de carreteras de pavimentos flexible </p>
                    <h3>$5,000,000</h3>
                    
                </section>
            </section>


            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    
                    <img src={img3}></img>

                    <h3>Edificacion general</h3>
                </section>
                <section class="catras w-full h-full" >
                    
                    <h3>Edificacion general</h3>
                    <p className="m-2.5">Tenemos equipos listos para cualquier tipo de edificacion que necesite realizar en cualquier parte del territorio nacional</p>
                    <h3>$25,000,000</h3>

                </section>
            </section>



            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    <img src={img1}></img>
                    <h3>Control de inundaciones</h3>
                </section>
                <section class="catras w-full h-full">

                    <h3>Control de inundaciones</h3>
                    <p className="m-2.5">Tenemos equipos que estan especializados en la creacion de sistemas anti inundaciones</p>
                    <h3>$5,000</h3>

                </section>
            </section>
            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    <img src={img2}></img>
                    <h3>Drenaje pluvial y sanitario</h3>
                </section>
                <section class="catras w-full h-full">

                    <h3>Drenaje pluvial y sanitario</h3>
                    <p className="m-2.5"> Tenemos años de experiencia en la creacion de drenajes pluviales y sanitarios para cualquier necesidad </p>
                    <h3>$3,000</h3>

                </section>
            </section>
            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    <img src={img4}></img>
                    <h3>Instalaciones de recreacion</h3>
                </section>
                <section class="catras w-full h-full">
                    
                    <h3>Instalaciones de recreacion</h3>
                    <p className="m-2.5"> Creamos sitios de recreacion para cualquier lugar o zona turistica que necesite</p>
                    <h3>$1,000,000</h3>

                </section>
            </section>
            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    <img src={img7}></img>
                    <h3>Preparacion de suelos</h3>
                </section>
                <section class="catras w-full h-full">
                    
                    <h3>Preparacion de suelos</h3>
                    <p className="m-2.5">Preparamos cualquier tipo de suelo teniendo todos los cuidados medio ambientales de flora y fauna</p>
                    <h3>$1,000/hectarea</h3>

                </section>
            </section>
            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    <img src={img8}></img>
                    <h3>Puentes</h3>
                </section>
                <section class="catras w-full h-full">
                    
                    <h3>Puentes</h3>
                    <p className="m-2.5">Creamos puentes para que sea accesible cualquier zona que necesiten, tenemos una gran cantidad de personal listo para este tipo de obras </p>
                    <h3>$300,000</h3>

                </section>
            </section>
            <section class="carta  w-96 h-auto border-box m-5 flex flex-wrap items-center justify-items-center bg-white border-black rounded-md">
                <section class="cfrente absolute w-full h-full z-10">
                    <img src={img5}></img>
                    <h3>Mantenimiento vial</h3>
                </section>
                <section class="catras w-full h-full">
                    
                    <h3>Mantenimiento vial</h3>
                    <p className="m-2.5">Damos mantenimeinto a sus carreteras con un costo razonable, cuidando sus inversiones pasadas </p>
                    <h3>$250,000</h3>

                </section>
            </section>

            <section className="h-full w-full items-center">
                    <Formulario>
                        <p class="clasificacion flex">
                            <RButton type="radio" id="radio1" forl="radio1" fname="estrellas" onClick={onAddStart4} caption="&#9733;" value="5" ></RButton>
                            <RButton type="radio" id="radio2" forl="radio2" fname="estrellas" onClick={onAddStart3} caption="&#9733;" value="4"></RButton>
                            <RButton type="radio" id="radio3" forl="radio3" fname="estrellas" onClick={onAddStart2} caption="&#9733;" value="3"></RButton>
                            <RButton type="radio" id="radio4" forl="radio4" fname="estrellas" onClick={onAddStart1} caption="&#9733;" value="2"></RButton>
                            <RButton type="radio" id="radio5" forl="radio5" fname="estrellas" onClick={onAddStart} caption="&#9733;" value="1"></RButton>
                        </p>

                        <Fields type="text" id="txtName" fname="txtName" onChange={onChange} value={formData.Nombre}  placeholder="Nombre Completo"></Fields>
                        <Fields type="email" id="txtEmail" fname="txtEmail" onChange={onChange1} value={formData.Email} placeholder="Correo Electronico (example@example.com)" ></Fields>
                        <Fields type="text" id="extTitulo" fname="txtTitulo" onChange={onChange2} value={formData.Titulo} placeholder="Titulo* (Max 15 Letras)"></Fields>
                        <TextArea id="txtDescrip" fname="txtDescrip1" rows="5" onChange={onChange3} value={formData.descripcion} placeholder="Descripcion..."></TextArea>                        
                        <Button caption="Enviar" onClick={onAddNew}></Button>
                    </Formulario>
            </section>

        </section>
    </main>
    )
}
export default Construccion;