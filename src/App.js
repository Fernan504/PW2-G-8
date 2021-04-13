import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
//import Cuerpo from './components/Layouts/Cuerpo';
import Login from "./components/Pages/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Pages/principal/Principal';
import Mas from './components/Pages/Mas/Mas';
import Footer from './components/Footer/Footer';
import Contact from './components/Pages/Contacto/Contacto'
import Arq from './components/Pages/Arquitectura/Arquitectura';
import Eleq from './components/Pages/Electricidad';
import EM from './components/Pages/EMetalicas';
import Maq from './components/Pages/Maquinaria/Maquinaria';
import Rem from './components/Pages/Remodelacion/Remodelacion';
import Cons from './components/Pages/Construccion/Construccion';
import Pint from './components/Pages/Pinturas/Pinturas';

function App() {
  return (
    <Router>
        
      <section>
        
        <Switch>
          <Route path="/" exact>
          <BrandHeader title="ConstructoraCMHN"></BrandHeader>
              <Home />
              <Footer></Footer>
          </Route>
          <Route path="/Contacto" exact>
             <BrandHeader title="Contacto"></BrandHeader>
             <Contact></Contact>
             <Footer></Footer>
           </Route>
           <Route path="/Mas" exact>
             <BrandHeader title="Mas"></BrandHeader>
             <Mas></Mas>
             <Footer></Footer>
          </Route>
          <Route path="/Arquitectura" exact>
             <BrandHeader title="Arquitectura"></BrandHeader>
             <Arq></Arq>
             <Footer></Footer>
          </Route>
          <Route path="/Electricidad" exact>
             <BrandHeader title="Electricidad"></BrandHeader>
             <Eleq></Eleq>
             <Footer></Footer>
          </Route>
          <Route path="/EMetalicas" exact>
             <BrandHeader title="Estructuras Metalicas"></BrandHeader>
             <EM></EM>
             <Footer></Footer>
          </Route>
          <Route path="/Remodelacion" exact>
             <BrandHeader title="Remodelacion"></BrandHeader>
             <Rem></Rem>
             <Footer></Footer>
          </Route>
          <Route path="/Maquinaria" exact>
             <BrandHeader title="Maquinaria"></BrandHeader>
             <Maq></Maq>
             <Footer></Footer>
          </Route>
          <Route path="/Construccion" exact>
             <BrandHeader title="Construccion"></BrandHeader>
             <Cons></Cons>
             <Footer></Footer>
          </Route>
          <Route path="/Pintura" exact>
             <BrandHeader title="Pintura"></BrandHeader>
             <Pint></Pint>
             <Footer></Footer>
          </Route>
        </Switch>
         

      </section>
    </Router>
  );
}

export default App;
