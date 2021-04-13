import FormField from '../../Forms/FormField';
import FormField1 from '../../Forms/FormField2';
import Form from '../../Forms/Form';
import FormAction from '../../Forms/FormAction';

function NewContact({onChange, value, onAddNew, onChange1, value1, onChange2, value2, onChange3, value3, onChange4, value4}){
    
    return(

                <Form>
                  <section className="mx-24 grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-6 m-16 p-3">
                    <FormField
                        type="text"
                        id= "txtName"
                        fname= "txtName"
                        onChange={onChange}
                        value={value}
                        placeholder="Ingrese Nombre y Apellido Aqui..."
                        onKeyUp={(e) => { if (e.keyCode === 13) { onAddNew(e);} }}
                    />
                     <FormField
                        type="text"
                        id= "txtEmail"
                        fname= "txtEmail"
                        onChange={onChange1}
                        value={value1}
                        placeholder="Correo Electrónico* (example@example.com)"
                        onKeyUp={(e) => { if (e.keyCode === 13) { onAddNew(e);} }}
                    />
                     <FormField
                        type="text"
                        id= "txtNum"
                        fname= "txtNum"
                        onChange={onChange2}
                        value={value2}
                        placeholder="Numero Telefono* (+504-9999-9999/5049999999)"
                        onKeyUp={(e) => { if (e.keyCode === 13) { onAddNew(e);} }}
                    />
                     <FormField
                        type="text"
                        id= "txtTitulo"
                        fname= "txtTitulo"
                        onChange={onChange3}
                        value={value3}
                        placeholder="Titulo* (Max 15 Letras)"
                        onKeyUp={(e) => { if (e.keyCode === 13) { onAddNew(e);} }}
                    />
                      <div className="md:col-span-2">
                     <FormField1
                        type="text"
                        id= "txtDescrip"
                        fname= "txtDescrip"
                        onChange={onChange4}
                        value={value4}
                        placeholder="Descripcion"
                        onKeyUp={(e) => { if (e.keyCode === 13) { onAddNew(e);} }}
                    />
                    </div>
                    <FormAction onClick={onAddNew} caption="Enviar" className="btnEnviar mb-4 p-0 font-sans h-20 w-36 bg-blue-700 text-white border-2 border-solid rounded-lg text-2xl hover:shadow-lg hover:bg-blue-600 cursor-pointer"></FormAction>
                    </section>
                </Form>
            
    );
} 

export default NewContact;